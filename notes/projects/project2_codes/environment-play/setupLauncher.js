let launchButton = document.getElementById('launcher');
launchButton.addEventListener('click', () => {
  console.log('Launching simulator');
  var sw = window.open('./index.html', 'simulatorTab', 'width=1156,height=660');
  setTimeout(() => {
    console.log('simulatorWindow', sw);
    window.simulatorWindow = sw;
  }, 500);
});
