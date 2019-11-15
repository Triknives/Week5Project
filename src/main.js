import {  } from './scripts';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';


$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();
  })
});
