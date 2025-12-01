/* Select form */
const search_form = document.querySelector('.header_form');

search_form.addEventListener('submit', (event) => {
  /* stop form from auto submiting on click */
  event.preventDefault();

  /* get the value of the form field */
  const value = document.querySelector('#search').value;

   search_Ip_Address(value);
});

/* Search for an IpAddress */
async function search_Ip_Address(ip_address) {
  const api_key = 'at_eLYvzkICiCHK43iwnutjXLzLKx8tC';
  const request = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`,
  );
  const response = await request.json();

  /* Update the UI on the page */
  const { location, ip, isp } = response;
  update_ui(ip, location.city, location.timezone, isp);
}

/* update UI function */
function update_ui(ip_address, location, timezone, isp) {
  /* select all the elements on the page */
  const address = document.querySelector('.address');
  const city = document.querySelector('.location');
  const utc = document.querySelector('.utc');
  const isprovider = document.querySelector('.isp');

  /* Update all the elements on the page */
  address.textContent = ip_address;
  city.textContent = location;
  utc.textContent = 'UTC' + timezone;
  isprovider.textContent = isp;
}
