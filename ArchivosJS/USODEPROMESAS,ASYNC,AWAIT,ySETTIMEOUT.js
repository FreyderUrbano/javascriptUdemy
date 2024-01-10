//PROMESAR AWAIT ASYNC Y SETTIMEOUT

async function funcionConPromesaAwaitYtimeout() {
  let miPromesa = new Promise((resolve) => {
    setTimeout(() => resolve("PROMESA CON AWAIT Y TIMEOUT"), 5000);
  });
  console.log(await miPromesa);
}
funcionConPromesaAwaitYtimeout();