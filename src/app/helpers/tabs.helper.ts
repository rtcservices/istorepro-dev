export function setTabHeights(dataTabBody: string) {
  const tabCardBody = document.querySelectorAll(dataTabBody);
  if (!tabCardBody) return;
  const maxHeight =
    6 +
    Math.max(...Array.from(tabCardBody).map((elm: any) => elm.clientHeight));
  tabCardBody.forEach((itm) => {
    itm.setAttribute('style', `height:${maxHeight}px;`);
  });
}
