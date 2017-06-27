from linked_stack import *


# String -> Value
# returns the evaluated expression given in postfix form
def postfix_calc(expression):
    stack = empty_stack()
    while expression.__len__() > 0:
        temp_str = split(expression)
        if temp_str == '+':
            temp, stack = pop(stack)
            temp2, stack = pop(stack)
            stack = push(stack, temp2 + temp)
        elif temp_str == '-':
            temp, stack = pop(stack)
            temp2, stack = pop(stack)
            stack = push(stack, temp2 - temp)
        elif temp_str == '*':
            temp, stack = pop(stack)
            temp2, stack = pop(stack)
            stack = push(stack, temp2 * temp)
        elif temp_str == '/':
            temp, stack = pop(stack)
            temp2, stack = pop(stack)
            stack = push(stack, temp2 / temp)
        else:
            stack = push(stack, float(temp_str))
        expression = expression[temp_str.__len__() + 1:]
    return pop(stack)[0]


def split(expression):
    if expression.__contains__(" "):
        return expression[:expression.index(" ")]
    return expression
