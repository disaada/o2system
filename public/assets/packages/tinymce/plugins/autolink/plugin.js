tinymce.PluginManager.add("autolink",function(e){function t(e){i(e,-1,"(",!0)}function n(e){i(e,0,"",!0)}function r(e){i(e,-1,"",!1)}function i(e,t,n){function r(e,t){if(0>t&&(t=0),3==e.nodeType){var n=e.data.length;t>n&&(t=n)}return t}function i(e,t){1!=e.nodeType||e.hasChildNodes()?a.setStart(e,r(e,t)):a.setStartBefore(e)}function o(e,t){1!=e.nodeType||e.hasChildNodes()?a.setEnd(e,r(e,t)):a.setEndAfter(e)}var a,s,l,c,u,d,f,p,m,h;if("A"!=e.selection.getNode().tagName){if(a=e.selection.getRng(!0).cloneRange(),a.startOffset<5){if(p=a.endContainer.previousSibling,!p){if(!a.endContainer.firstChild||!a.endContainer.firstChild.nextSibling)return;p=a.endContainer.firstChild.nextSibling}if(m=p.length,i(p,m),o(p,m),a.endOffset<5)return;s=a.endOffset,c=p}else{if(c=a.endContainer,3!=c.nodeType&&c.firstChild){for(;3!=c.nodeType&&c.firstChild;)c=c.firstChild;3==c.nodeType&&(i(c,0),o(c,c.nodeValue.length))}s=1==a.endOffset?2:a.endOffset-1-t}l=s;do i(c,s>=2?s-2:0),o(c,s>=1?s-1:0),s-=1,h=a.toString();while(" "!=h&&""!==h&&160!=h.charCodeAt(0)&&s-2>=0&&h!=n);a.toString()==n||160==a.toString().charCodeAt(0)?(i(c,s),o(c,l),s+=1):0===a.startOffset?(i(c,0),o(c,l)):(i(c,s),o(c,l)),d=a.toString(),"."==d.charAt(d.length-1)&&o(c,l-1),d=a.toString(),f=d.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i),f&&("www."==f[1]?f[1]="http://www.":/@$/.test(f[1])&&!/^mailto:/.test(f[1])&&(f[1]="mailto:"+f[1]),u=e.selection.getBookmark(),e.selection.setRng(a),e.execCommand("createlink",!1,f[1]+f[2]),e.selection.moveToBookmark(u),e.nodeChanged())}}var o;return e.on("keydown",function(t){return 13==t.keyCode?r(e):void 0}),tinymce.Env.ie?void e.on("focus",function(){if(!o){o=!0;try{e.execCommand("AutoUrlDetect",!1,!0)}catch(t){}}}):(e.on("keypress",function(n){return 41==n.keyCode?t(e):void 0}),void e.on("keyup",function(t){return 32==t.keyCode?n(e):void 0}))});