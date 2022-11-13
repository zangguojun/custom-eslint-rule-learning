/**
 * @fileoverview route-define
 * @author tongyi
 * @demo https://eslint.bootcss.com/docs/developer-guide/working-with-rules
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'router不规范，请查看router定义规则',
      recommended: true,
      url: '',
    },
    message: {},
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
    }
  },
}
