# Construct.css

> "**Construct.css** - Focus on the content and structure of your HTML"

Read more…

https://t7.github.io/construct.css/

---



javascript:(function(d){var%20f=Array.prototype.forEach;var%20linkTags=d.querySelectorAll('[rel=\'stylesheet\']');var%20styleTags=d.querySelectorAll('style');f.call(linkTags,function(x){x.rel=''});f.call(styleTags,function(x){x.innerHTML=''});var%20newLink=d.createElement('link');newLink.rel='stylesheet';newLink.href='/css/bookmarklet.css';d.head.appendChild(newLink)})(document);
