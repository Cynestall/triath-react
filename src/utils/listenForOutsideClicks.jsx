// https://www.positronx.io/react-detect-outside-click-to-hide-dropdown-element-tutorial/
export default function listenForOutsideClicks(
  listening,
  setListening,
  menuRef,
  setIsOpen
) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [(`click`, `touchstart`)].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = menuRef.current;
        const node = evt.target;
        if (!cur) return;
        if (cur.contains(node)) return;
        setIsOpen(false);
        setListening(false);
      });
    });
  };
}
