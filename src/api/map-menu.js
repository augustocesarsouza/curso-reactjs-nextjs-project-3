export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    menu_links: links = [],
  } = menu;
  return {
    newTab,
    text,
    link,
    srcImg,
    links,
  };
};
