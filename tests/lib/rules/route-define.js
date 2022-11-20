/**
 * @fileoverview route-define
 * @author route-define
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/route-define"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("route-define", rule, {
  valid: [
    {
      code: "function getName(){ return 'cxr'}",
    },
    {
      code: "function setName(){}",
    },
  ],
  invalid: [
    {
      name: "should throw error when function doesn't return value",
      code: "function getName(){}",
      output: "function getName(){return ''\r}",
      errors: [{ message: "getXX function name must return a value" }],
    },
    {
      name: "should throw error when function doesn't return value",
      code: "function getName(){ const name = 'cxr'}",
      errors: [{ message: "getXX function name must return a value" }],
      output: `function getName(){ const name = 'cxr';return ''\r}`,
    },
    {
      name: "no fix",
      code: "function getName(){}",
      output: null,
      options: [false],
      errors: [{ message: "getXX function name must return a value" }],
    },
  ],
});
