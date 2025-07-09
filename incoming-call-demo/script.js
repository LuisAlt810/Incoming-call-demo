const callDiv = document.getElementById('call');
const ringtone = document.getElementById('ringtone');

fetch('caller.json')
  .then(res => res.json())
  .then(data => {
    document.querySelector('.caller-photo').style.backgroundImage = `url(${data.avatar})`;
    document.querySelector('.caller-name').textContent = 'Incoming Call';
    document.querySelector('.status').textContent = `${data.callerName} is calling...`;
    ringtone.src = data.ringtone;
    ringtone.play().catch(() => {
      console.log('Autoplay blocked, tap to start ringtone');
    });
    document.querySelector('.buttons').style.display = 'flex';
  })
  .catch(() => {
    document.querySelector('.caller-name').textContent = 'Error loading caller';
    document.querySelector('.status').textContent = '';
  });

function acceptCall() {
  ringtone.pause();
  callDiv.innerHTML = `
    <div class="caller-name">Call Connected</div>
    <div class="status">You're talking to iPhone.</div>
  `;
}

function declineCall() {
  ringtone.pause();
  callDiv.innerHTML = `
    <div class="caller-name">Call Declined</div>
    <div class="status">You declined the call.</div>
  `;
}
