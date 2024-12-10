// Token management
const getToken = () => localStorage.getItem('tacticsToken') ;
const setToken = (token) => localStorage.setItem('tacticsToken' , token) ;

// Check URL for token on load
const checkUrlForToken = () => {
  const hash = window.location.hash ;
  if (hash.startsWith('#token=')) {
    const token = hash.replace('#token=' , '') ;
    setToken(token) ;
    // Clean URL
    window.location.hash = '' ;
    showCounter() ;
  }
} ;

const showLogin = () => {
  const mainContent = document.getElementById('mainContent') ;
  if (!mainContent) return ;
  
  mainContent.innerHTML = `
    <div class="card">
      <button class="text-button" onclick="login()">Login</button>
    </div>
  ` ;
} ;

const showCounter = () => {
  const mainContent = document.getElementById('mainContent') ;
  if (!mainContent) return ;
  
  mainContent.innerHTML = `
    <div class="card">
      <div class="button-group">
        <button class="text-button" onclick="incrementBy1()">Tactic 1</button>
        <button class="text-button" onclick="incrementBy2()">Tactic 2</button>
      </div>
      <p class="counter-text">Counter: <span id="counterValue">0</span></p>
    </div>
  ` ;
  
  fetchCounter() ;
} ;

const login = () => {
  window.location.href = 'https://tactics.dev/auth/1938d7db-1b0d-4a1f-963b-4db322cbdc60/login?appUrl=https://remember5329.github.io/counter-test/' ;
} ;

// Modified fetch functions to include token
const incrementBy1 = async () => {
  const token = getToken() ;
  if (!token) return ;

  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method : "POST" ,
    headers : { 
      "Content-Type" : "application/json" , 
      "x-external-api-key" : token ,
    } ,
    body : JSON.stringify({ 
      tactic_id : "d40404bf-79f7-41b4-85fd-1ce14b760f7c" ,
    }) ,
  }) ;
  
  const data = await response.json() ;
  const counter = JSON.parse(data.result.content.value) ;
  
  document.getElementById('counterValue').textContent = counter ;
} ;

const incrementBy2 = async () => {
  const token = getToken() ;
  if (!token) return ;

  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method : "POST" ,
    headers : { 
      "Content-Type" : "application/json" , 
      "x-external-api-key" : token ,
    } ,
    body : JSON.stringify({ 
      tactic_id : "e3838283-fb7a-4620-9d0e-ee3cd2e2de17" ,
    }) ,
  }) ;
  
  const data = await response.json() ;
  const counter = JSON.parse(data.result.content.value) ;

  document.getElementById('counterValue').textContent = counter ;
} ;

const fetchCounter = async () => {
  const token = getToken() ;
  if (!token) return ;

  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method : "POST" ,
    headers : { 
      "Content-Type" : "application/json" , 
      "x-external-api-key" : token ,
    } ,
    body : JSON.stringify({ 
      tactic_id : "a9259df5-c27b-4a51-96b5-09f8840fdf4e" ,
    }) ,
  }) ;

  const data = await response.json() ;
  const counter = JSON.parse(data.result.content.value) ;

  document.getElementById('counterValue').textContent = counter ;
} ;

document.addEventListener('DOMContentLoaded', () => {
  checkUrlForToken() ;
  
  const token = getToken() ;
  if (token) {
    showCounter() ;
  } else {
    showLogin() ;
  }
}) ;
