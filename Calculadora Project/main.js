"use strict";

const btn = document.querySelector(".btn");
const equal = document.querySelector(".btn-equal");
const back = document.querySelector(".btn-back");
const clean = document.querySelector(".btn-clean");

const result = function (num) {
  let resultado = document.querySelector(".resultado").textContent;
  document.querySelector(".resultado").textContent = resultado + num;
};

clean.addEventListener("click", function () {
  document.querySelector(".resultado").textContent = "";
});

equal.addEventListener("click", function () {
  let resultado = document.querySelector(".resultado").textContent;
  console.log(resultado);
  document.querySelector(".resultado").textContent = eval(resultado);
});

back.addEventListener("click", function () {
  let resultado = document.querySelector(".resultado").textContent;
  document.querySelector(".resultado").textContent = resultado.substring(
    0,
    resultado.length - 1
  );
});
