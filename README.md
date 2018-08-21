# evalExpr
Evaluates a sting expression of type "(23+(3-6))*2+2" and returns the computed number.

This JS file first uses the Shunting-yard algorithm to transform the string input into a Reverse Polish Notation. Then it uses a stack-based  evaluator to compute the RPN into a final result.
This JS file doesn't use eval() on purpose.

This exercise was proposed by Coding Academy by Epitech, thanks for their support.
