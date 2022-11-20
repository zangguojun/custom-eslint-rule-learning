/**
 * @fileoverview route-define
 * @author tongyi
 * @demo-en https://eslint.bootcss.com/docs/developer-guide/working-with-rules
 * @demo-cn https://zh-hans.eslint.org/docs/latest/developer-guide/working-with-rules
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
      description: '为IDD模板提供eslint的route校验',
      recommended: true,
      url: '',
    },
    messages: {
      avoidName: "Avoid using variables named '{{ name }}'"
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [
      {
        type: "boolean"
      },
    ], // Add a schema if the rule has options
  },

  create(context) {
    console.log('🚀~ 27 create context', context)
    // variables should be defined here
    const isFix = context.options[0]
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    // any helper functions should go here or else delete this section
    function reportError(node) {
      context.report({
        node,
        messageId: "avoidName",
        data: {
          name: "foo",
        },
        fix: (fixer) => {
          if(isFix === false) return fixer.insertTextAfter(node,"")
          const endPosition = node.range[1] - 1
          const prefix = node.body.body.length === 0? "":";"
          return {
            range:[endPosition,endPosition],
            text:`${prefix}return ''\r`
          }
        },
      });
    }


    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      FunctionDeclaration(node) {
        if (node.id.name.startsWith("get")) {
          const blockStatementBody = node.body.body;
          const lastNode = blockStatementBody[blockStatementBody.length - 1];
          if (!lastNode || lastNode.type !== "ReturnStatement") {
            reportError(node);
          }
        }
      },
    }
  },
}
