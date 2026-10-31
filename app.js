let statusTimer;
function notify(message){const status=document.querySelector('#status');status.textContent=message;clearTimeout(statusTimer);statusTimer=setTimeout(()=>status.textContent='',5000);}
document.querySelector('#share-card').addEventListener('click',async()=>{
 const url=location.href.split('#')[0];
 try{if(navigator.share){await navigator.share({title:'LaceXperience',text:'Lace installs & custom wigs in Houston.',url});}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);notify('Card link copied. Ready to share.');}else{notify('Copy the page address from your browser to share this card.');}}
 catch(error){if(error.name!=='AbortError')notify('Copy the page address from your browser to share this card.');}
});
