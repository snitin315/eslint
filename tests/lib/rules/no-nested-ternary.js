/**
 * @fileoverview Tests for the no-nested-ternary rule
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("no-nested-ternary", {
    valid: [
        "foo ? doBar() : doBaz();",
        "var foo = bar === baz ? qux : quxx;"
    ],
    invalid: [
        { code: "foo ? bar : baz === qux ? quxx : foobar;", errors: [{ message: "Do not nest ternary expressions", type: "ConditionalExpression"}] },
        { code: "foo ? baz === qux ? quxx : foobar : bar;", errors: [{ message: "Do not nest ternary expressions", type: "ConditionalExpression"}] }
    ]
});
