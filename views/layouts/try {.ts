try {
  const response = await fetch("https://echo.paw.cloud/", {
    method: 'GET',
    headers: {}
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}