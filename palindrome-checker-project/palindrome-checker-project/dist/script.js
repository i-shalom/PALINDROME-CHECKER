function palindrome(str) {
  const reg = (/[\W_]/g);
  const smallstr = str
  .toLowerCase()
  .replace(reg, "");
  const reversed = smallstr
  .split("")
  .reverse()
  .join("");
  return true;
  return false;
}