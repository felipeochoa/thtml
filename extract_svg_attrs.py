import attr
import os
import os.path
import re
from bs4 import BeautifulSoup


@attr.s
class Interface:
    name = attr.ib()
    globals = attr.ib()
    specific = attr.ib()

    @staticmethod
    def global_name(name: str) -> str:
        name = re.sub(r'\s([a-z])', lambda m: m.group(1).title(), name).replace(' ', '')
        name = re.sub(r'-([a-z])', lambda m: m.group(1).title(), name).replace('-', '')
        name = re.sub('xlink', 'Xlink', name, flags=re.IGNORECASE)
        name = re.sub('aria', 'Aria', name, flags=re.IGNORECASE)
        if name.startswith('Globals.'):
            return "'%s'" % camelize(name[8:])
        return 'Svg' + name

    @property
    def proper_name(self) -> str:
        return 'Svg' + camelize(self.name).title()

    def to_str(self):
        pieces = []
        if self.globals:
            pieces.extend(sorted(map(self.global_name, self.globals)))
        if self.specific:
            pieces.extend("'%s'" % attr for attr in sorted(map(camelize, self.specific)))
        return ' | '.join(pieces)


def load_interface(name, text) -> Interface:
    start = text.find('\n---\n', 4) + 4
    text = text[start:]
    soup = BeautifulSoup(text, 'html5lib')
    return Interface(name, load_globals(soup), load_specific(soup))


def load_globals(soup):
    h3 = soup.find(id='Global_attributes')
    attr_list = h3.find_next_sibling()
    if attr_list.name == 'dl':
        return [extract_global_name(dt.get_text()) for dt in attr_list.find_all('dt')]
    elif attr_list.name == 'ul':
        return [extract_global_name(li.get_text()) for li in attr_list.find_all('li')]
    return []


def load_specific(soup):
    header = soup.find(id='Specific_attributes')
    if header is None:
        header = soup.find(id='Attributes')
        if header is None:
            return []
    attrs_ul = header.find_next_sibling()
    if attrs_ul.name == 'ul':
        attrs_lis = attrs_ul.find_all('li')
        return [extract_attr_name(li.get_text()) for li in attrs_lis]
    elif attrs_ul.name == 'dl':
        attrs_dts = attrs_ul.find_all('dt')
        return [extract_attr_name(li.get_text()) for li in attrs_dts]
    return []


def extract_global_name(text: str) -> str:
    text = clean(text)
    match = re.match(r'\{\{\s*SVGAttr\([\'"]([a-z0-9:A-Z-]+)[\'"]\)\s*\}\}', text, flags=re.IGNORECASE)
    if match:
        text = 'Globals.' + re.sub('^class$', 'className', match.group(1), flags=re.IGNORECASE)
    text = re.sub(' *attributes$', '', text, flags=re.IGNORECASE)
    if text.lower() == 'style':
        return 'Styling'
    return text


def extract_attr_name(text: str) -> str:
    text = clean(text)
    match = re.match(r'\{\{\s*SVGAttr\([\'"]([a-z0-9:A-Z-]+)[\'"]\)\s*\}\}', text, flags=re.IGNORECASE)
    if match:
        return match.group(1)
    match = re.match(r'\{\{\s*htmlattrxref\([\'"]([a-z0-9:A-Z-]+)[\'"], ?[\'"]([a-z0-9:A-Z-]+)[\'"]\)\s*\}\}',
                     text, flags=re.IGNORECASE)
    if match:
        return 'html-' + match.group(2) + '-' + match.group(1)
    raise ValueError('Could not extract attribute from ' + text)


def clean(name: str) -> str:
    return re.sub(r'\s', ' ', name).replace('»', '').strip()


def camelize(name: str) -> str:
    name = re.sub(r'-([a-z])', lambda m: m.group(1).title(), name).replace('-', '')
    name = re.sub(r':([a-z])', lambda m: m.group(1).title(), name)
    return name


def maybe_quote(name: str) -> str:
    if re.search('[^a-z]', name):
        return "'%s'" % name
    return name


def main():
    for name in os.listdir('.'):
        fullname = os.path.join(name, 'index.html')
        if not os.path.isfile(fullname):
            continue
        text = open(fullname).read()
        try:
            interface = load_interface(name, text)
        except Exception as e:
            e.args = (e.args[0] + (' (%s)' % name),)
            raise
        print('    %s: %s,' % (maybe_quote(interface.name), interface.to_str()))


if __name__ == '__main__':
    main()
