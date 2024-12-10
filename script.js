let counter ;

const incrementBy1 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy1 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      initial_variables: {}, // Add any initial variables you want to pass to the tactic
      tactic_id: "d40404bf-79f7-41b4-85fd-1ce14b760f7c" 
    })
  });
  
  const data = await response.json();
  const counter = JSON.parse(data.result.content.value) ;
  
  document.getElementById('counterValue').textContent = counter ;
} ;

const incrementBy2 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy2 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      initial_variables: {}, // Add any initial variables you want to pass to the tactic
      tactic_id: "e3838283-fb7a-4620-9d0e-ee3cd2e2de17" 
    })
  });
  
  const data = await response.json();
  const counter = JSON.parse(data.result.content.value) ;

  document.getElementById('counterValue').textContent = counter ;
} ;

const fetchCounter = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the fetchCounter tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/1938d7db-1b0d-4a1f-963b-4db322cbdc60/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      initial_variables: {}, // Add any initial variables you want to pass to the tactic
      tactic_id: "a9259df5-c27b-4a51-96b5-09f8840fdf4e" 
    })
  });

  const data = await response.json();
  const counter = JSON.parse(data.result.content.value) ;

  document.getElementById('counterValue').textContent = counter ;
} ;

document.addEventListener('DOMContentLoaded', async () => {
  fetchCounter() ;
}) ;
