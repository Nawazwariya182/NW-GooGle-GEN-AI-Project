async function getAnswer() {
  const inputElement = document.getElementById('inpu');
  const prompt = inputElement.value;
  const textArea = document.getElementById('ta');

  try {
      const response = await fetch('http://localhost:3000/api/generate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
          const data = await response.json();
          textArea.value = data.response;
      } else {
          textArea.value = 'Error: ' + response.statusText;
      }
  } catch (error) {
      textArea.value = 'Error: ' + error.message;
  }
}
