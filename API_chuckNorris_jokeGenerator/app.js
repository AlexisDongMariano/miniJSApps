document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[id="number"]').value;


  xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  console.log('GET JOKES:', this);

  xhr.onload = function () {
    console.log('INSIDE ONLOAD:', this);
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';
      if (response.type === 'success') {
        response.value.forEach(function (item) {
          output += `
            <li>${item.joke}</li>
          `;
        })

      }
      else {
        output += `<li>something went wrong<\li>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}