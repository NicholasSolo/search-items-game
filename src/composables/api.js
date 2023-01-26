const URL = '/api';
// const URL = 'https://dev.askona-home-search-items.sandbox.outofcloud.ru/api';

export async function register(body) {
  let data;

  try {
    const response = await fetch(`${URL}/register`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      data = await response.json();
    } else {
      data = false;
    }
  } catch (e) {
    console.log(e);
  }

  return data;
}

export async function updatePhone(body) {
  let data;

  try {
    const response = await fetch(`${URL}/update_phone`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      data = await response.json();
    } else {
      data = false;
    }
  } catch (e) {
    console.log(e);
  }

  return data;
}

export async function updateMailPhone(body) {
  let data;

  try {
    const response = await fetch(`${URL}/update_phone_email`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      data = await response.json();
    } else {
      data = false;
    }
  } catch (e) {
    console.log(e);
  }

  return data;
}

export async function sendCode(body) {
  let data;

  try {
    const response = await fetch(`${URL}/check_code`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      data = await response.json();
    } else {
      data = false;
    }
  } catch (e) {
    console.log(e);
  }

  return data;
}
