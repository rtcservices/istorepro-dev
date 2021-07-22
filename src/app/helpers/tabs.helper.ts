export function setTabHeights(dataTabBody: string, extraHeight = 0) {
  const tabCardBody = document.querySelectorAll(dataTabBody);
  if (!tabCardBody) return;
  const maxHeight =
    extraHeight +
    Math.max(...Array.from(tabCardBody).map((elm: any) => elm.clientHeight));
  tabCardBody.forEach((itm) => {
    itm.setAttribute('style', `height:${maxHeight}px;`);
  });
}
