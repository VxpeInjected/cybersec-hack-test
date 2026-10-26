# DOCPA Walkthrough (spoilers)

Open DevTools with F12. Chrome and Firefox name the tabs differently:
Elements = **Inspector**, Sources = **Debugger**, Application = **Storage**. Console and Network are the same.

1. **Website "Inspect"ion**: Elements/Inspector. Find the HTML comment. Answer: `pineapple`
2. **Now You See Me**: Elements/Inspector. Find the `<span>` with `display:none`. Answer: `velvet`
3. **Select All**: Press Ctrl+A to highlight the white-on-white text. Answer: `marker`
4. **Read The Source**: Sources/Debugger, open `js/secret.js` (or Ctrl+U). Answer: `compass`
5. **Cookie Monster**: Application/Storage, then Cookies. Read the `passcode` cookie. Answer: `crumbs`
6. **Covered Up**: Elements/Inspector. Delete the white box covering the text. Answer: `peeled`
7. **Magic Word**: Find the word in the `<meta name="description">` in the head. In the Console run `unlock("cipher")`. Answer: `whisper`
8. **Follow The Request**: Network tab, reload, click `token.json`, read the Response. Answer: `packets`
9. **Vault**: Application/Storage, then Local Storage. Read the value. Answer: `lantern`
10. **Locked Out**: Elements/Inspector. Remove the `disabled` attribute from the button, then click it. Answer: `skeleton`
11. **Credentials Please**: The address bar now shows `?role=guest`. Change `guest` to `admin` and press Enter. Answer: `tampered`
12. **Lost In Translation**: The text is Base64. In the Console run `atob("bGlnaHRob3VzZQ==")`. Answer: `lighthouse`
13. **Keep Out**: Replace `level-13` at the end of the address with `robots.txt`. It lists a disallowed page (`vault-9f3a`); open that page the same way. Answer: `crawler`
14. **Override**: In the Console run `unlocked=true`, then click the button. Answer: `mercury`
15. **Frozen In Time**: Open DevTools first, then reload. The page pauses on a `debugger` statement; while paused, the passcode is on screen. Answer: `carousel`
