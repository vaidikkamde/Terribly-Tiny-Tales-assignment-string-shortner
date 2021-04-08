class StringShortner {
  constructor() {
    this.shortMap = new Map();
    this.longMap = new Map();
  }

  getLong(short) {
    return this.shortMap.get(short);
  }

  getShort(long) {
    return this.longMap.get(long);
  }

  shorten(long) {
    const existingShort = this.getShort(long);
    if (existingShort) {
      return existingShort;
    } else {
      const len = long.length - 1;
      const randomLen = Math.floor(Math.random() * len) + 1;
      const short = randomStr(randomLen);
      this.shortMap.set(short, long);
      this.longMap.set(long, short);
      return short;
    }
  }
}

function randomStr(len) {
  var ans = "";
  const CHAR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (i = len; i > 0; i--) {
    ans += CHAR[Math.floor(Math.random() * CHAR.length)];
  }
  return ans;
}

// ----------------DOM Methords------------------------
const shortenBtn = document.getElementById("shorten");
const getOrignalBtn = document.getElementById("get-orignal");
const stringShortner = new StringShortner();
shortenBtn.addEventListener("click", onShorten);
getOrignalBtn.addEventListener("click", onGetOrignal);

function onShorten() {
  const orignalText = document.getElementById("string-input").value;
  const shortnedText = document.getElementById("shortned-text");
  const shortned = stringShortner.shorten(orignalText);
  shortnedText.innerHTML = `<h6>Entered String:</h6> ${orignalText}</br> <h6>Entered String Length:</h6>${orignalText.length}</br><h6>Shortned String:</h6>${shortned}</br><h6>Shortned String Length:</h6>${shortned.length}`;
}

function onGetOrignal() {
  const shortnedText = document.getElementById("shortned-string-input").value;
  const orignalText = document.getElementById("orignal-text");
  const orignal = stringShortner.getLong(shortnedText);
  orignalText.innerHTML = `<h6>Entered String:</h6> ${shortnedText}</br><h6>Orignal String:</h6>${orignal}`;
}
