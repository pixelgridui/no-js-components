// 3-line mitigation: Arrow keys cycle dropdown items
menu.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") next()?.focus();
  if (e.key === "ArrowUp")   prev()?.focus();
});
