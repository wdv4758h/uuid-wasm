import("../crate/pkg").then(module => {
  document.getElementById("myuuid").innerHTML = module.uuid4();
});
