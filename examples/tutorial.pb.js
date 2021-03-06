// DO NOT EDIT! Generated by Protobuf for PHP protoc plugin @package_version@
// Source: tutorial.proto
//   Date: 2011-03-23 17:08:43

/** @namespace */
var Tutorial = Tutorial || {};

// Make it CommonJS compatible
if (typeof exports !== 'undefined') {
  var ProtoJson = this.ProtoJson;
  if (!ProtoJson && typeof require !== 'undefined')
    ProtoJson = require('ProtoJson');
  Tutorial = exports;
} else {
  this.Tutorial = Tutorial;
}

/**
 * @constructor
 * @augments {ProtoJson.Message}
 * @extends ProtoJson.Message
 * @memberOf Tutorial
 * @param {object} data - Optional, provide initial data to parse
 */
Tutorial.Person = ProtoJson.create({
  fields: {
    1: ['name', 2, 9, null, null, {}],
    2: ['id', 2, 5, null, null, {}],
    3: ['email', 1, 9, null, null, {}],
    4: ['phone', 3, 11, 'Tutorial.Person.PhoneNumber', null, {}]
  },
  ranges: [
  ]
});

/**
 * Check <name> value
 * @return {Boolean}
 */
Tutorial.Person.prototype.hasName = function(){
  return this.has$(1);
};

/**
 * Set a value for <name>
 * @param {String} value
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.setName = function(value){
  return this.set$(1, value);
};

/**
 * Clear the value of <name>
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.clearName = function(){
  return this.clear$(1);
};

/**
 * Get <name> value
 * @return {String}
 */
Tutorial.Person.prototype.getName = function(){
  return this.get$(1);
};

/**
 * Check <id> value
 * @return {Boolean}
 */
Tutorial.Person.prototype.hasId = function(){
  return this.has$(2);
};

/**
 * Set a value for <id>
 * @param {Int} value
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.setId = function(value){
  return this.set$(2, value);
};

/**
 * Clear the value of <id>
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.clearId = function(){
  return this.clear$(2);
};

/**
 * Get <id> value
 * @return {Int}
 */
Tutorial.Person.prototype.getId = function(){
  return this.get$(2);
};

/**
 * Check <email> value
 * @return {Boolean}
 */
Tutorial.Person.prototype.hasEmail = function(){
  return this.has$(3);
};

/**
 * Set a value for <email>
 * @param {String} value
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.setEmail = function(value){
  return this.set$(3, value);
};

/**
 * Clear the value of <email>
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.clearEmail = function(){
  return this.clear$(3);
};

/**
 * Get <email> value
 * @return {String}
 */
Tutorial.Person.prototype.getEmail = function(){
  return this.get$(3);
};

/**
 * Check <phone> value
 * @return {Boolean}
 */
Tutorial.Person.prototype.hasPhone = function(){
  return this.has$(4);
};

/**
 * Set a value for <phone>
 * @param {Tutorial.Person.PhoneNumber} value
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.setPhone = function(value){
  return this.set$(4, value);
};

/**
 * Clear the value of <phone>
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.clearPhone = function(){
  return this.clear$(4);
};

/**
 * Get an item from <phone>
 * @param {int} idx
 * @return {Tutorial.Person.PhoneNumber}
 */
Tutorial.Person.prototype.getPhone = function(idx){
  return this.get$(4, idx);
};

/**
 * Get <phone> value
 * @return {Tutorial.Person.PhoneNumber[]}
 */
Tutorial.Person.prototype.getPhoneList = function(){
  return this.get$(4);
};

/**
 * Add a value to <phone>
 * @param {Tutorial.Person.PhoneNumber} value
 * @return {Tutorial.Person}
 */
Tutorial.Person.prototype.addPhone = function(value){
  return this.add$(4, value);
};


Tutorial.Person.PhoneType = {
  /** @const */ MOBILE: 0,
  /** @const */ HOME: 1,
  /** @const */ WORK: 2
};

/**
 * @constructor
 * @augments {ProtoJson.Message}
 * @extends ProtoJson.Message
 * @memberOf Tutorial.Person
 * @param {object} data - Optional, provide initial data to parse
 */
Tutorial.Person.PhoneNumber = ProtoJson.create({
  fields: {
    1: ['number', 2, 9, null, null, {}],
    2: ['type', 1, 14, 'Tutorial.Person.PhoneType', Tutorial.Person.PhoneType.HOME, {}]
  },
  ranges: [
  ]
});

/**
 * Check <number> value
 * @return {Boolean}
 */
Tutorial.Person.PhoneNumber.prototype.hasNumber = function(){
  return this.has$(1);
};

/**
 * Set a value for <number>
 * @param {String} value
 * @return {Tutorial.Person.PhoneNumber}
 */
Tutorial.Person.PhoneNumber.prototype.setNumber = function(value){
  return this.set$(1, value);
};

/**
 * Clear the value of <number>
 * @return {Tutorial.Person.PhoneNumber}
 */
Tutorial.Person.PhoneNumber.prototype.clearNumber = function(){
  return this.clear$(1);
};

/**
 * Get <number> value
 * @return {String}
 */
Tutorial.Person.PhoneNumber.prototype.getNumber = function(){
  return this.get$(1);
};

/**
 * Check <type> value
 * @return {Boolean}
 */
Tutorial.Person.PhoneNumber.prototype.hasType = function(){
  return this.has$(2);
};

/**
 * Set a value for <type>
 * @param {Int (Tutorial.Person.PhoneType)} value
 * @return {Tutorial.Person.PhoneNumber}
 */
Tutorial.Person.PhoneNumber.prototype.setType = function(value){
  return this.set$(2, value);
};

/**
 * Clear the value of <type>
 * @return {Tutorial.Person.PhoneNumber}
 */
Tutorial.Person.PhoneNumber.prototype.clearType = function(){
  return this.clear$(2);
};

/**
 * Get <type> value
 * @return {Int (Tutorial.Person.PhoneType)}
 */
Tutorial.Person.PhoneNumber.prototype.getType = function(){
  return this.get$(2);
};

/**
 * @constructor
 * @augments {ProtoJson.Message}
 * @extends ProtoJson.Message
 * @memberOf Tutorial
 * @param {object} data - Optional, provide initial data to parse
 */
Tutorial.AddressBook = ProtoJson.create({
  fields: {
    1: ['person', 3, 11, 'Tutorial.Person', null, {}]
  },
  ranges: [
  ]
});

/**
 * Check <person> value
 * @return {Boolean}
 */
Tutorial.AddressBook.prototype.hasPerson = function(){
  return this.has$(1);
};

/**
 * Set a value for <person>
 * @param {Tutorial.Person} value
 * @return {Tutorial.AddressBook}
 */
Tutorial.AddressBook.prototype.setPerson = function(value){
  return this.set$(1, value);
};

/**
 * Clear the value of <person>
 * @return {Tutorial.AddressBook}
 */
Tutorial.AddressBook.prototype.clearPerson = function(){
  return this.clear$(1);
};

/**
 * Get an item from <person>
 * @param {int} idx
 * @return {Tutorial.Person}
 */
Tutorial.AddressBook.prototype.getPerson = function(idx){
  return this.get$(1, idx);
};

/**
 * Get <person> value
 * @return {Tutorial.Person[]}
 */
Tutorial.AddressBook.prototype.getPersonList = function(){
  return this.get$(1);
};

/**
 * Add a value to <person>
 * @param {Tutorial.Person} value
 * @return {Tutorial.AddressBook}
 */
Tutorial.AddressBook.prototype.addPerson = function(value){
  return this.add$(1, value);
};

