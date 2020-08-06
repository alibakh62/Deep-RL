# C++ setup instructions (for MacOS)

Please refer to [this document](docs/CPP_setup_MacOS.pdf) for detailed instructions.

### Python C++ Cheatsheet

We are providing you with a cheatsheet showing you Python syntax and the C++ equivalent. You might find this cheatsheet helpful as you learn to program in C++. You'll find that some of the syntax between Python and C++ is exactly the same or at least similar.

Supporting Materials: [C++ Python CheatSheet](docs/c-python-cheatsheet.pdf)

# Elecia White
Elecia White was kind enough to offer her time and expertise as we developed this course (and the next in the Nanodegree).

Elecia White is a principal embedded software engineer at  [Logical Elegance, Inc.](http://logicalelegance.com/), a small consulting firm in California. She enjoys sharing her enthusiasm for engineering and devices through writing and speaking. Elecia is the author of O’Reilly’s  [Making Embedded Systems](https://www.amazon.com/Making-Embedded-Systems-Patterns-Software/dp/1449302149), host of  [Embedded.fm](http://embedded.fm/), and editor/blogger at  [Embedded.fm](http://embedded.fm/blog/). Her  [past projects](https://www.linkedin.com/in/elecia/)  include children’s toys, a DNA scanner, inertial measurement units, Fitbit, and a gunshot location system.

![](https://video.udacity-data.com/topher/2017/September/59a91312_cover/cover.jpg)

# Why C++?

Watch [this video](https://youtu.be/_t4ZvwfnuCA).

# Python and C++ Comparison

### Goal of this Module

The main goal of this module is to prepare you for writing C++ code. Because you are already familiar with coding practices in Python, the module will emphasize the similarities and differences between the two languages.

These lessons assume you are already familiar with general programming ideas like writing for loops, while loops, assigning values to variables, and writing functions. The fundamentals of how to code remain the same.

### Learning a New Programming Language

The best way to learn a new programming language is to practice writing code; therefore, most of this lesson involves learning C++ syntax and then practicing the syntax in an exercise.

By the end of the lesson, you should feel confident translating Python code into C++ code.

Throughout this lesson, you will be presented with Python code and the C++ equivalent. Below is an example of a simple program in Python alongside a C++ version. Both versions do exactly the same thing; they assign an integer 5 to the variable x. Then they output the value of x to the terminal.

Study each example line by line. Notice the similarities as well as the differences:

![](https://video.udacity-data.com/topher/2017/August/59a76b5f_my-drawing/my-drawing.png)

One similarity is variable assignment:  `x = 5`. And the overall structure of the programs are the same.

But there are also a few major differences:

-   the C++ program is wrapped with a function called  `main()`
-   `x`  has to be explicitly defined as an integer
-   instead of using  `print()`  to output the results to terminal, the code uses  `std::cout`

You are going to learn about all of these facets (and more) in this C++ lesson.

# Static vs. Dynamic Typing
Watch [this video](https://youtu.be/D7v6iIAORkE).

# Python is Dynamic, C++ is Static

### Dynamically Typed versus Statically Typed

On the surface, Python and C++ have a lot in common; for instance, you'll see that if statements, for loops, and basic mathematical expressions are quite similar.

But under the hood, Python and C++ have fundamental differences. One major difference is that C++ is  **statically typed**  whereas Python is  **dynamically typed**.

Take a look at this Python code:

```python

vehicle_doors = 4
vehicle_speed = 3.0
vehicle_acceleration = 1.5
vehicle_on = True
vehicle_gear = 'D'
vehicle_doors = vehicle_doors + 1

```

Python automatically figures out that vehicle_doors is an integer, vehicle_speed is a float, and vehicle_on is a boolean variable. Variable assignment is  **dynamic**. In Python, you do not need to specify the type of value that will go into a variable.

Did you notice the typo "vehicle_dors" instead of "vehicle_doors"? That is legitimate python code, and it won't produce an error.

In C++, none of the above code would work. You need to declare the variable type before you define a value; therefore, C++ is a  **statically typed**  language. Below is a C++ version of the code:

```cpp

int vehicle_doors;
float vehicle_speed;
float vehicle_acceleration;
char vehicle_gear;
bool vehicle_on;

vehicle_doors = 4;
vehicle_speed = 3.0;
vehicle_acceleration = 1.5;
vehicle_gear = 'D';
vehicle_on = True;

vehicle_doors = vehicle_doors + 1;

```

If you had typed:  `vehicle_dors = vehicle_doors + 1;`, you would get an error. That is because the vehicle_dors variable was never defined.

## Declaring Variables in a Statically Typed Language

In this quiz, you will write integer variable declarations in C++. Read through the code below and fill in the TODO sections:

```cpp
// include all libraries needed
#include <iostream>

/* 	
*	These are C++ comments. There are two ways to write comments in C++.
*	Using the slash with an asterisk is one way.
*/ 

// Here is another way to write comments in C++

/* In general, C++ code is run from a file called main.cpp
* The implementation goes into a function called main().
* The main() function almost always returns a zero, which provides evidence that 
* the program ran to its end.
*/

// define main function
int main() {
    
    int integer_one;
    integer_one = 5;
    
    // TODO: Define a variable called integer_two and assign a value of 9.
    
    // TODO: Calculate the sum of integer_one and integer_two 
    // and assign the result to integer_sum
    int integer_sum;
    
    // outputs the results to standard out
    std::cout << integer_sum;
    
    return 0;
}
```

### Variable Assignment Python vs C++

What if the quiz had been in Python instead of C++? Remember, Python is a dynamically typed language whereas C++ is statically typed. In Python, you can assign values and Python automatically figures out what type of variable you wanted to use; however, when programming in C++, you need to declare the variable type prior to assignment.

### C++ Tip

In the C++ quiz, you might have written a statement like:

```cpp
int integer_two;
integer_two = 9;

```

You can also define and assign a variable in one line of code like this:

```cpp
int integer_two = 9;
```

# Basic C++ Data Types

Now you know how to declare a variable in a statically typed language like C++. The C++ language has a handful of basic data types that you can use directly in your programs. These include integers, floats, and characters. Here is a table showing the most important basic data types that you will be using in the lesson:

|data type|declaration|
|---------|-----------|
|integer|int|
|floating point|float|
|double floating point|double|
|character|char|
|boolean|bool|
|valueless|void|


Some of these data types might look a bit unfamiliar. Here are some examples of each type:

**integer**

integers are whole numbers like -20 5 700 -19

**floating point**

floating points are real numbers containing decimals like 5.109 199.25 -1.278

**double floating point**

A double floating point can hold more decimals than a floating point; the tradeoff is that a double floating point requires more memory. The next part of the lesson goes into more detail about floating points versus double floating points.

**character**

The char type definition is for ASCII characters. ASCII represent the English language Roman alphabet and common mathematical symbols. A  `char`  variable can only hold one letter at a time; you cannot use a  `char`  type definition to represent a string.

examples of characters: a U l & @

**boolean**

Booleans are variables containing either true or false.

**valueless**

The  `void`  type definition is used for special cases. You cannot declare a void variable in C++. You'll find that void is used when a function does not return anything; a function might print something out to the terminal but not return a value.

### Quiz:: Assigning Other Data Types
```cpp
#include <iostream>

int main() {
    
    // TODO: define two floating point numbers. Assign 12.07 to the
    // first floating point number. Assign 65.102 to the 
    // second floating point number.
    
    
    // TODO: Calculate the sum of the two floating point variables into
    // the float_sum variable.
    
    float float_sum; 
    std::cout << float_sum << std::endl;
    
    // TODO: Calculate difference between the second and first number
    // output the results to cout. 
    
    // TODO: Calculate second_float / first_float and output the results
    // to cout.
    
    // TODO: Calculate the product of the two numbers and output the results
    // to cout.

    return 0;
}
```

# Floating and Double Floating Point Numbers

In the last section, you saw a table with fundamental C++ data types and their declarations.

**What exactly is the difference between a float and a double?**

Both data types can represent numbers containing decimals:

```cpp
float x = 5.79;

```

and

```cpp
double x = 5.79;

```

However, a double can store about twice as many digits as a float. But there is also a cost; a double requires more memory.

As you'll see in the demonstration below, storing more digits can be important especially when calculations require precision.

### Demo: Floating versus Double Type Definitions

The following code will show you the difference between a float data type and a double data type. The code assigns the number 11.0 to a float variable as well as a double variable. Next, each variable is divided by one-hundred thousand.

A for loop then sums each variable one-hundred thousand times to see how close each variable can get to 11.0. You will see that neither variable gets back to exactly 11.0 because memory can only hold a finite number of decimal places. But, the double variable gets closer to exactly 11.0.

Read through the code and then hit the "Test Run" button to see the output of the demonstration.

```cpp
#include <stdio.h>

int main() {
    
    // define floating point numbers    
    float float_num;
    float float_sum = 0;

    double double_num;
    double double_sum = 0;

    int divisions = 100000;

    // divide the floating point numbers by divisions
    float_num = 11.0/divisions;
    double_num = 11.0/divisions;

    // sum the number by the number of divisions to see how close the results
    // get to 11.0
    for (int i = 0; i < divisions; i++) {
        float_sum = float_sum + float_num;
        double_sum = double_sum + double_num;

    }
    
    printf("Floating point sum: %.15g\n", float_sum);
    printf("Double sum: %.15g\n", double_sum);

    return 0;
}
```

# Doubles are bigger
Watch [this video](https://youtu.be/uhwTWgmM2iY).

# Common Errors and Error Messages

As you to start to write your own C++ code, you might end up with some errors when you try to run your code. C++ errors can be very long and difficult to read even with something simple like a missing semi-colon. In this section, you are going to see some common errors you might run into when writing your C++ code. The goal is to become comfortable debugging your own code.

Here is a simple program that you saw in the beginning of the lesson. The program defines an integer x, assigns the value 5, and finally prints the results to terminal.

```cpp
#include <iostream>

int main ()
{

    int x;
    x = 5;

    std::cout << x << std::endl;

    return 0;
}

```

### Semi-colon Errors

What happens if you forget to end a line with a semi-colon?

```cpp
#include <iostream>

int main ()
{

    int x
    x = 5;

    std::cout << x;

    return 0;
}

```

```cpp
main.cpp:6:7: error: expected ';' at end of declaration
        int x
             ^
             ;
1 error generated.

```

This error message says that code line 6 at the 7th character in main.cpp should have ended in a semi-colon. Every command in C++ needs to end with a semi-colon.

### Declaring and Defining Variable Errors

What about forgetting to declare a variable?

```cpp
#include <iostream>

int main ()
{
    x = 5;

    std::cout << x;

    return 0;
}

```

```cpp
main.cpp:6:2: error: use of undeclared identifier 'x'
        x = 5;
        ^
main.cpp:8:15: error: use of undeclared identifier 'x'
        std::cout << x << std::endl;
                     ^
2 errors generated.

```

This produced two errors: one for each time the x variable appeared. The error says that on line 6 at the 2nd character, the variable x needs to be declared. The same error occurs at line 8, character 15.

The  _undeclared identifier_  errors means that the variable needs a data type definition like  `int x;`.

### Namespace Errors

What happens if you forget to include  _std_  in the line  `std::cout`?

```cpp
#include <iostream>

int main ()
{

    int x;
    x = 5;

    cout << x;

    return 0;
}

```

```cpp
main.cpp:9:2: error: use of undeclared identifier 'cout'; did you mean
      'std::cout'?
        cout << x;
        ^~~~
        std::cout
/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/iostream:54:33: note: 
      'std::cout' declared here
extern _LIBCPP_FUNC_VIS ostream cout;
                                ^
1 error generated.

```

All eleven lines refer to just one error! If you read the error line by line, however, you can get a lot of useful information. The most important part comes at the beginning where you're told that line 9, character 2 has an undeclared identifier  `cout`. The error message tries to help by mentioning you probably meant to use  `std::cout`.

The rest of the error tells points you to the file where  `std::cout`  was originally defined.

### Library Include Errors

What happens if you forget to include the standard library file that defines  `std::cout`?

```cpp

int main ()
{

    int x;
    x = 5;

    std::cout << x;

    return 0;
}

```

```cpp
main.cpp:7:2: error: use of undeclared identifier 'std'
        std::cout << x;
        ^
1 error generated.

```

The error says that C++ does not recognize what  `std`  means on line 7, character 2.

The definition of  `std`  is in the iostream file of the standard library, which needs to be included at the top of the program with the line  `#include <iostream>`. Otherwise, your program won't recognize what  `std`  means.

### Putting it All Together

So far, you've seen what happens when your program outputs one error at a time. What about when there are multiple errors?

```cpp
int main ()
{

    x = 5;

    cout << x;

    return 0
}

```

```cpp
main.cpp:4:2: error: use of undeclared identifier 'x'
        x = 5;
        ^
main.cpp:6:2: error: use of undeclared identifier 'cout'
        cout << x;
        ^
main.cpp:6:10: error: use of undeclared identifier 'x'
        cout << x;
                ^
main.cpp:8:10: error: expected ';' after return statement
        return 0
                ^
                ;
4 errors generated.

```

You get a list of errors starting from the top of your program and working down.

Undeclared identifier implies a variable or function needs a definition. And the semi-colon errors reminds you that all C++ commands need to end in a semi-colon.

When you run your code, you might end up with a very long list of errors that can be difficult to decipher. Usually, the first line of the error has the most important information, so start by looking at the top of the output. If you cannot figure out what an error means, try copying the error text and pasting it into a search engine. Oftentimes, there are resources online explaining what the error is and how to fix it.

### Quiz: Fix this Code

Click on the Test Run button below. You will see that this code produces quite a few errors. Fix the errors until you have a working solution. You can ignore everything below the "Traceback" errors, which are not C++ errors; the traceback errors are related to the Python backend for running coding quizzes.

```cpp
int main ()
{

	x = 25
	y = 61.4
	z = 199.2

	division = y / z

	cout << x << '\n'
	cout << y << '\n'
	cout << division << '\n'
	
	return 0
}
```

# Functions: Python vs C++

In both Python and C++, functions have the same role; functions group statements together to perform some task. Functions help you avoid copying and pasting the same code over and over again.

The syntax for writing functions is slightly different for mainly three reasons:

1.  Python detects the end of a code line based on seeing a carriage return and new line feed. C++ uses a semi-colon for the same purpose.
2.  Python uses indentation to group code statements together, but C++ uses curly braces.
3.  Python is dynamically typed while C++ is statically typed. Much like how you declared variables, you need to declare your functions.

Let's start off with a simple function and compare the Python and C++ code side-by-side.

This function takes in a velocity and time. These are multiplied together to calculate a distance. Besides the differences in syntax, pay special attention to:

-   the function declaration
-   variable declarations
-   what code goes inside main() and what code goes outside of main

![](https://video.udacity-data.com/topher/2017/August/59a79f27_copy-of-template-1/copy-of-template-1.png)

### Dissecting the Code

So the C++ code looks much longer than the Python code because the C++ has some extra parts. You are going to dissect this code piece by piece.

The code starts off with

```cpp
#include <iostream>
```

That is importing the iostream part of the C++ Standard Library. You need that line of code in order to use  `cout`.

After importing the necessary libraries, you see a function declaration.

```cpp
float distance(float velocity, float time_elapsed); 
```

That line of code informs your C++ program that there is a function called  **distance**. The function accepts two float variables and returns a float. The first float variable is called velocity and the second float variable is called time_elapsed.

Then comes the  **main**  function. All C++ programs require a main() function that returns a zero. The main() function calls the distance function and outputs the results to the terminal.

```cpp
int main() {

    std::cout << distance(5, 4) << std::endl;
    std::cout << distance(12.1, 7.9) << std::endl;

    return 0;
}
```

and finally, you have the function definition

```cpp
float distance(float velocity, float time_elapsed) {
    return velocity * time_elapsed;
}
```

You have seen the  **main()**  function before, so this isn't the first time you have seen how functions work in C++. Notice how the main function and the distance function have very similar syntax. The only difference is that the main function does not accept any arguments and returns an integer of value zero; on the other hand, the distance function accepts two floats and returns a float.

You also don't make a separate declaration for the main function. On the next page, you'll get more practice with understanding functions and writing functions in C++.

# Anatomy of a Function

You have seen how to write a function in C++. More generically, a C++ functions consists of a function declaration and a function definition.

Because C++ is statically typed, you need to specify the data types for the function input variables and the data type of whatever the function returns.

```cpp
// function declaration
returndatatype functionname(datatype variable_a, datatype variable_b, etc.);

```

```cpp
// function definition
returndatatype functionname(datatype variable_a, datatype variable_b, etc.) {
     statement_1;
     statement_2;
     etc...

   return returndatatype;
}
```

### Quiz: Write a Function

Write a function, called distance, with three inputs and one output. The inputs are velocity, acceleration and time. The output is the distance traveled over the elapsed time. The equation for calculating distance is:  

distance = velocity \times elapsedtime + 0.5 \times acceleration \times elapsedtime \times elapsedtimedistance=velocity×elapsedtime+0.5×acceleration×elapsedtime×elapsedtime

This quiz is not graded. You will see some test cases in the main() function to test out your code. To run your code, click on the "Test Run" button.

A solution has been provided in the solution.cpp so that you can compare your results.

```cpp
//TODO: include the iostream part of the standard library
#include <iostream>

//TODO: declare your function called distance
float distance(float velocity, float acceleration, float time_elapsed);

// Leave the main function as is
int main() {
    
    // TODO: The following are examples you can use to test your code.
    // You will need to uncomment them to get them working.
    
    std::cout << distance(3, 4, 5) << std::endl;  
    std::cout << distance(7.0, 2.1, 5.4) << std::endl;
    
    return 0;   
}

//TODO: define your function
float distance(float velocity, float acceleration, float time_elapsed) {
    return velocity*time_elapsed + 0.5*acceleration*time_elapsed*time_elapsed;
}
```

# Functions with More than One Output

In Python, you can write a function that has multiple outputs. For example,

```
## Python Code
def distance(velocity, time_elapsed):
    return velocity * time_elapsed, velocity / 2

```

would output both velocity * time_elapsed and velocity / 2.

In C++, functions can only have one output. There are work-arounds, but these work-arounds go beyond the scope of this module.

# C++ Tip: Function Declarations

You do not have to put the function declaration at the top of your code to get a working solution. Much like how you can declare and define a variable simultaneously,  `int x = 5;`, you can also declare and define a function simultaneously.

The following code would work as well:

```cpp
// C++ code
float distance(float velocity, float time_elapsed) {
    return velocity * time_elapsed;
}

int main() {

    std::cout << distance(5, 4) << std::endl;
    std::cout << distance(12.1, 7.9) << std::endl;

    return 0;
}
```

But note that you have to define your function before the main() function not  _after_; otherwise your code would try to call the distance() function but not have a definition for the function.

However, we encourage you to always declare your functions before main() and define them after main. In the next lesson in the nanodegreee called practical C++, you will learn why; declaring and defining your functions separately helps keep your code organized as your programs become more complex.

# Two Functions Same Name
Andy learns about `typedef` and is reminded to always be suspicious of repeated code.

Note: Elecia and Andy use the word "vector". For now you should think of a vector as something similar to a Python list. So when Elecia says "vector vector float", she is referring to a two-dimensional list (a list of lists) whose elements are floats.

Watch the video [here](https://youtu.be/0ZF649G58l4).

The following line of code can be used to define an entirely new type called  `t_grid`  which is a vector of vectors of floats (for now you can think of vectors as being similar to Python lists).

```cpp
typedef vector < vector <float> > t_grid; 
```

Anywhere you would have written  `vector < vector <float> >`, you can now just write  `t_grid`!

In the video below Andy discovered something surprising while translating his histogram filter code from Python to C++. He could have two  **different**  functions which each had the  **same**  name and this didn't cause any problems.

You can find the code Elecia and Andy discuss below the video.

```cpp
bool close_enough(float v1, float v2) { 
    if (abs(v2-v1) > 0.0001 ) {
        return false;
    } 
    return true;
}

bool close_enough(vector < vector <float> > g1, vector < vector <float> > g2) {
    int i, j;
    float v1, v2;
    for (i=0; i<g1.size(); i++) {
        for (j=0; j<g1[0].size(); j++) {
            v1 = g1[i][j];
            v2 = g2[i][j];
            if (abs(v2-v1) > 0.0001 ) {
                return false;
            }
        }
    }
    return true;
}
```

Watch the video [here](https://youtu.be/9SgmzOfBmRU).

# Function Signatures 1
Here Andy and Elecia discuss function signatures. The code for the `test_normalize` function can be found below the video.

Watch the video [here](https://youtu.be/T6kQ_4w98IQ).

```cpp
bool test_normalize() {
    //declare several variables on one line
    vector < vector <float> > unnormalized, normalized, result; 

    unnormalized = zeros(2, 2);
    normalized = zeros(2,2);

    int i,j;

    for (i=0; i<2; i++) {
        for(j=0; j<2; j++) {
            unnormalized[i][j] = 1.0;
            normalized[i][j] = 0.25;
        }
    }

    result = normalize(unnormalized);

    bool correct;
    correct = close_enough(normalized, result);

    if (correct) {
        cout << "! - normalize function worked correctly!\n";
    }
    else {
        cout << "X - normalize function did not work correctly.\n";
        cout << "For the following input:\n\n";
        show_grid(unnormalized);
        cout << "\nYour code returned the following:\n\n";
        show_grid(result);
        cout << "\nWhen it should have returned the following:\n";
        show_grid(normalized);
    }
    return correct;
}
```

# Function Signature 2
Andy and Elecia continue their discussion of function signatures. Code below the [video](https://youtu.be/Sx4AWTmXl2U).

The signature for the normalize function is:

```cpp
vector< vector<float> > normalize(vector< vector <float> > grid);
```

Watch the video [here](https://youtu.be/U3QAFb3AS1M).

# If and Boolean Logic
## Control Statements

Now that you know how to declare variables and write functions, you are well on your way to C++ proficiency.

So far, the programs you've worked with have been relatively simple. You will need control statements to make more complex programs. Control statements like  **if**  and  **for**  are fundamental to many programming languages. They allow you to make conditions about when and how often code statements should be run.

In this section, you will learn to use C++  **if**  statements and the associated boolean logic.

The next section will cover looping with  **while**  and  **for**. And then finally, you will learn about the  **switch**  statement. Python has equivalents for  **if**,  **while**  and  **for**; however, the  **switch**  statement does not exist in Python.

After you learn about control statements, you will be ready to write more sophisticated C++ programs.

### Python vs. C++ If

Below is an example of a Python set of if statements versus the C++ equivalent.

You will see that the logical structure is exactly the same but the syntax is slightly different. You could imagine that the code below would be part of a traffic light classification program that tells a vehicle the current color of a traffic signal.

![](https://video.udacity-data.com/topher/2017/August/59a86c50_copy-of-template-2/copy-of-template-2.png)

A generic if else statement in C++ looks like this:

```cpp
if (<some criteria>) {
    statement_1;
    statement_2;
   .... etc.
}
else if (<some other criteria>) {
    statement_1;
    statement_2;
   .... etc.
}
else {
    statement_1;
    statement_2;
   .... etc.
}
```

### Boolean Logic

You need boolean logic to make if statements useful. Boolean logic works the same way in Python and in C++; some of the syntax is the same and some is slightly different.

Here is a table showing comparison operators in the two languages:

|Operator|Python|C++|
|:--------:|:------:|:---:|
|equal|==|==|
|not equal|!=|!=|
|not equal|!=|!=|
|greater than or equal|>=|>=|
|less than or equal|<=|<>=|

Yes, indeed, comparison operators are exactly the same in the two languages!

What about logical operators such as  **and**,  **or**, as well as  **not**?

These are not the same in the two languages:

|Operator|Python|C++|
|:--------:|:------:|:---:|
|and|and|&&|
|or|or| \|\| |
|not|not|!|

### Playground

Here is a playground for writing your own if statements. In the code comments, you will see a couple of suggestions of what to code. The solution.cpp file has solutions with which you can compare your code.

```cpp
#include <iostream>

int main() {
    
    /* 
    * TODO: Use this as a playground for writing if, else if and else statements
    * To get you started here, are some ideas:
    * 
    * 1. Create an integer variable and a set of if, elseif and else statements that
    * output whether the number is positive or negative.
    * 
    * 2. Create a character variable containing 'a' for acceleration, 'b' for braking, 
    * 'p' for parked, or 'n' for neutral and outputs whether or not the vehicle is accelerating, braking, 
    * parked or in neutral.
    *
    * Practice Using Boolean Logic
    *
    * You can see an example solution in the solution.cpp file
    */
    
    int x = 5;
    if (x > 0) {
        std::cout << "Positive Number" << std::endl;
    }
    else if (x < 0) {
        std::cout << "Negative Number" << std::endl;
    }
    else {
        std::cout << "Zero" << std::endl;
    }
    
    
    char status = 'a';
    
    if (status == 'a') {
        std::cout << "Accelerating" << std::endl;
    }
    else if (status == 'b') {
        std::cout << "Braking" << std::endl;
    }
    else if (status == 'p') {
        std::cout << "Parking" << std::endl;
    }
    else if (status == 'n') {
        std::cout << "Neutral" << std::endl;
    }
    else {
        std::cout << "Unknown" << std::endl;
    }
    
    return 0;
}
```

# While and For Loops

### Python vs. C++ While

Below you'll see an example of a Python while loop compared with a C++ while loop. They look quite similar!

The example starts with an integer 15 in the elapsed_time variable. With each iteration, the integer is reduced by 1. Once the elapsed_time reaches zero, the program leaves the while loop.

![](https://video.udacity-data.com/topher/2017/August/59a8862d_while/while.png)

A generic while statement looks like this:

```cpp
while (<some criteria>) {
    statement_1;
    statement_2;
    statement_3;
    ....etc
}

```

### Python vs. C++ For loops

For loop syntax is very similar in Python and C++ as well.

This following example is like the while loop except the count variable increases instead of decreases (this does not necessarily need to be the case, we just did it that way here).

![](https://video.udacity-data.com/topher/2017/August/59a88d29_for/for.png)

One thing to note is how Python iterates through the  **i**  variable versus how C++ does the iteration.

For python the iterator was defined here:

```python
i in range(0, elapsed_time)
```

Python's range() function generates a list of numbers, which in this case would be

```python
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

Then Python assign each of these values in turn to the  **i**  variable until reaching the end of the list.

For C++, the iteration happens in this line of code:

```cpp
(int i = 0; i < elapsed_time; i++) 
```

First you declare the variable  **i**  and assigned a value (in this case zero). The for loop then checks if

```cpp
i < elapsed_time
```

If true, then the code block is run and then  **i**  increases by one. The code  `i++`  is equivalent to saying  `i=i+1`.

When

```cpp
i = 14
```

that will be the last time that the code block runs. The code checks that 14 is less than 15, runs the code block and increases  **i**  to 15. Then the code checks if 15 is less than 15. Since that is false, the for loop does not run again.

### Playground - For Loops

Use this playground to program for loops. The comments have a suggestion to get you started, and you can compare your code with the solution in solution.cpp.

```cpp
#include <iostream>

int main() {
    
    for (int i = 0; i < 80; i++) {
        if (i < 10) {
            std::cout << "slow" << std::endl;
        }
        else if (i < 30) {
            std::cout << "medium" << std::endl;
        }
        else if (i < 70) {
            std::cout << "fast" << std::endl;
        }
        else {
            std::cout << "too fast" << std::endl; 
        }
        
    }
    
    
    return 0;
}
```

One item to note in the above playground is that C++ considers something enclosed in single quotes ('a') to be a `char`, while double quotes ("fast") is a string.

# Switch

A switch statement is very similar to an if clause. In fact, you can write a program that does the exact same thing with either a switch statement or a series of if-else clauses.

Then why bother using a switch statement? For reasons we won't detail here, switch statements can oftentimes be faster to execute. Many programming languages have a switch statement including Java, Javascript, PHP, C++ among others; Python is an exception.

Since there is no Python switch statement, we will compare a set of if-else C++ clauses with a C++ switch statement.

Click on the image to zoom in.

![](https://video.udacity-data.com/topher/2017/September/59a8b9cb_switch/switch.png)

The output of the code would be

```
Not Moving - Neutral
Your car is currently in gear: N
```

Let's break down what is happening in the switch statement:

```cpp
    char gear_status = 'N';

    switch(gear_status) {
        case 'D' :
            std::cout << "Driving Forward" << std::endl;
            break;
        case 'N' :
            std::cout << "Not Moving - Neutral" << std::endl;
            break;
        case 'P' :
            std::cout << "Not Moving - Parked" << std::endl;
            break;
        case 'R':
            std::cout << "Driving in Reverse" << std::endl;
            break;
    }
```

Each time  **case**  appears, the code checks to see if the gear_status variables matches the case. Once gear_status finds a matching case, the code inside the case runs.

In C++, the switch statement was designed to run the code in the matching case and then all of the cases below. You need the  **break**  lines of code if you want your code to leave the switch after executing the matching case.

In other words, if the code were written without using break,

```cpp
#include <iostream>

int main() {

    char gear_status = 'N';

    switch(gear_status) {
        case 'D' :
            std::cout << "Driving Forward" << std::endl;
        case 'N' :
            std::cout << "Not Moving - Neutral" << std::endl;
        case 'P' :
            std::cout << "Not Moving - Parked" << std::endl;
        case 'R':
            std::cout << "Driving in Reverse" << std::endl;
    }

    std::cout << "Your car is currently in gear: " << gear_status << std::endl;

    return 0;
}
```

the code would still skip the 'D' case. But once the code found a match with the 'N' case, the code in the 'N', 'P', and 'R' cases would execute.

### Switch Limitations

If-else statements are much more flexible than switch statements. In fact, the  `case`  clauses in switch statements can only make comparisons between integer values. Switch cases can also compare characters like in the example code because C++ is actually converting the characters to integers.

On the other hand, if statements can make comparisons between floating point numbers as well as between integers.

The general form of a switch statement looks like this:

```cpp
    int variable = integer;

    switch(variable) {
        case 1:
            code statements;
            break;
        case 2 :
            code statements;
            break;
        case 3:
            code statements;
            break;
        case 4:
            code statements;
            break;
        case etc ... 
    }
```

### Switch Statement - Playground

Practice writing a switch statement in the playground below. The code comments will help you get started. You can run your code with the "Test Run" button and then compare your solution with "solution.cpp".

```cpp
//TODO Practice writing switch statements
// Don't forget an include statement if you want to use std::cout

#include <iostream>

int main() {
    
    // TODO: write a program that outputs whether a vehicle is a motorcycle,
    // 2-door coupe, 4-door car or a 5-door mini-van. 
    // You should create a variable that holds the number of doors in the vehicle
    // A motorcycle would have doors = 0 for example. 
    // Then use a switch statement to output to the terminal the kind of vehicle
    // you have

    int doors = 5;
    
    switch(doors) {
        case 0:
            std::cout << "Motorcycle" << std::endl;
            break;
        case 2:
            std::cout << "Coupe" << std::endl;
            break;
        case 4:
            std::cout << "Sedan" << std::endl;
            break;
        case 5:
            std::cout << "Mini-van" <<std::endl;
            break;

    }
    
    return 0;
}
```

# C++ Libraries

You have learned how to declare variables, write functions, and use control statements. Those are the basic building blocks of any programming language, and you are ready to write programs in C++.

But, what if you want to store a string in a variable or do more advanced math like taking the square root of a number? Just like Python, C++ also uses pre-built libraries to help make programming easier. In python, you use these libraries with an

```python
import
```

statement.

In C++, you use

```cpp
#include
```

You have already been using a file called "iostream" from the  [C++ Standard Library](https://en.wikipedia.org/wiki/C%2B%2B_Standard_Library). The "iostream" file contains functions and classes for outputting to a terminal and also reading in from a terminal.

You were able to take advantage of these pre-built functions by including the appropriate file like so:

```cpp
#include <iostream>
```

That include statement essentially pastes the  [iostream](http://en.cppreference.com/w/cpp/header/iostream)  file to the top of your code and gives you access to all of its functions and classes.

As your programs become more complex, you will rely more and more on C++ libraries.

### C++ Standard Library

The  [C++ Standard Library](http://en.cppreference.com/w/cpp/header)  has a lot of functions and classes like a definition for a string, arrays, tuples, functions for reading in and outputting files, random number generators, definitions for complex number variables, mathematical functions and many other functions as well.

And the C++ Standard Library comes with a C++ installation.

Besides this  [list](http://en.cppreference.com/w/cpp/header)  of files in the Standard Library, search engines are your best friend for finding functionality and libraries in C++. For example, if you are not sure how to do something in C++ like using strings, open a search engine and type "C++ string syntax". You will find many examples online of how to use strings in C++ and quickly find an example like the following:

##### Example: Strings

To use the part of the library that defines strings, you would include a line at the top of your main.cpp file like:

```cpp
#include <string>
```

```cpp
#include <string>

int main() {
   std::string stringvariable = "stringvalue";
   return 0;
}
```

##### Example: Math

Here is another example from the standard library.

```cpp
#include <iostream>
#include <cmath>

int main ()
{
   // calculate 
    std::cout << pow(3.4, 4);
}
```

The `pow()` function is raising 3.4 to the fourth power.

Cmath includes logarithmic and exponential functions, power functions, and trigonometric functions. You can see a full list  [here](http://www.cplusplus.com/reference/cmath/).

### Include Syntax

When you learned about structuring functions, you saw two different include statements:

```cpp
#include <iostream>
#include "distance.h"
```

In fact, you could also write,

```cpp
#include "iostream"
#include "distance.h"

```

but using quotes instead of brackets is less efficient. When using quotes, your program will first look for the iostream file in the main.cpp directory. When the program cannot find the file, the program will search where the standard library files are kept.

### Other Useful Libraries

As previously mentioned, the C++ Standard Library generally comes with a C++ installation; however, there are many other useful C++ libraries that you install separately. Each library will have its own installation procedure and usually comes with instructions. Again, search engines are your best friends when trying to find and install libraries.

This  [link](http://en.cppreference.com/w/cpp/links/libs)  contains a list of many open source C++ libraries. In the list, you will see all kinds of libraries for math, gaming, computer vision, machine learning, as well as many other topics.

In the next lesson, you will learn to use the C++ vector library.

# C++ Vectors
## Vectors and Matrix Algebra

Great work! You made it through a bunch of C++ syntax. As you've probably realized, programming in C++ is arguably harder than programming in Python. C++ was designed for fast execution, and the language gives you a lot of different ways to get the same results. Python was designed for writing code quickly but at the expense of execution speed.

There is one last piece of syntax you'll need to translate your Python code from earlier in the nanodegree: C++ vectors, which are like Python lists.

## The Vector Library

When you were writing Python programs to store and manipulate matrices, you used Python lists. C++ vectors are just like Python lists. In this lesson, you are going to practice using C++ vectors in preparation for translating Python code to C++.

But hold on! C++ also has something called a list. But this is where things get confusing. However, C++ lists do not work the same way as Python lists.

C++ lists and C++ vectors are both in a family of structures called  [sequence containers](http://en.cppreference.com/w/cpp/container). These containers allow you to store values in series and then access those values. C++ has a handful of sequence containers including lists, vectors, and arrays.

Don't get confused! C++ vectors are the closest to Python lists. You can add elements to a C++ vector just like you can in a Python list. You can remove elements as well and also easily access any element in the vector.

### Declaring C++ Vectors

Declaring C++ vector variables is like declaring any other type of variable:

```cpp
typedefinition variablename;
```

But the vector type definition has a funny looking syntax because you also need to declare what kind of values will go inside the vector such as integer, char, float, string, etc. Here are some examples of variable declarations using vectors:

```cpp
std::vector<char> charactervectorvariable;
std::vector<int> integervectorvariable;
std::vector<float> floatvectorvariable;
std::vector<double> doublevectorvariable:
```

### Including the Vector Library

In an actual program, you would need to include the vector file from the Standard Library:

```cpp
#include <vector>

int main() {
      std::vector<float> floatvectorvariable;
      return 0;
}
```

The above code will declare an empty vector of type float.

More generically, you declare a vector with:

```cpp
std::vector<datatype> variablename;
```

## Practice Declaring Vectors

```cpp
#include <vector>

int main() {
    
    std::vector<int> vector1;
    std::vector<int> vector2;
    std::vector<int> vector3;
    
    return 0;
}
```

# Namespaces

C++ vector syntax is a little bit hard to read especially because you have to type  `std`  over and over again: like for example, std::cout or std::string or std::vector.

Thankfully, C++ provides a way to avoid writing  `std`  all the time.

Std is something called a  [namespace](http://en.cppreference.com/w/cpp/language/namespace). Without getting too much into the details, namespaces let you organize code into logical groups. In this case, std is the namespace for the Standard Library.

You can actually declare your namespace at the top of your main.cpp file and then avoid writing

```cpp
std::
```

over and over again. Here is an example:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> intvectorvariable;
    int intvariable = 5;
    cout << intvariable << endl;
    return 0;

}
```

Now, the vector declaration, cout and endl no longer needed std::.

### Benefits of Namespaces

Declaring the namespace makes the code easier to read and write. The downside is that you have to be careful with how you name your own variables and functions. Previously, you might have written:

```cpp
std::cout
```

which lets your program know that you meant the cout function from the standard library.

C++ would have let you actually create a variable or function named cout as well. That's probably not a good idea, but the code won't produce an error. Once you declared the std namespace, your cout variable or function would be in conflict with the standard library cout.

Going forward from this point, the exercises and code examples will include the  `using namespace std;`  line of code.

You can now simplify the vector syntax using namespaces. Let's compare Python list and C++ vector syntax and then practice coding C++ vectors.

## Namespace Practice

Use the standard library namespace and change the code so that the code no longer uses "std::".

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    
    string fruit = "apple";
    string vegetable = "broccoli";
    
    cout << "My favorite fruit is " << fruit <<
      "and my favorite vegetable is " << vegetable << "\n";
    
    return 0;
}
```

# Python and C++ Comparison

Let's get back to vectors! You have already seen how to declare an empty vector.

In the code below, you can compare Python lists and C++ vector syntax. You'll see that the C++ vector is using a method called push_back, which appends values to the end of a vector. And the line of code

```cpp
vector<float> myvector (5);
```

declares vector of size five but without assigning any values. Assigning values to a C++ vector can be a bit tricky; later in this lesson you will see a few different ways to assign values to a vector variable.

![](https://video.udacity-data.com/topher/2017/November/5a0236d1_vectors/vectors.png)

The Python code is, as you've seen previously, much shorter to write than the C++ code. However, there are other ways for inputting values in a vector, which you will see in the next section.

# Initializing Vector Values

In the previous part of the lesson, you learned to declare a vector first and then assign values:

```cpp
vector<float> myvector(5);

myvector[0] = 5.0;
myvector[1] = 3.0;
myvector[2] = 2.7;
myvector[3] = 8.2;
myvector[4] = 7.9;
```

There are various other ways for assigning initial values to a vector. Here are two other ways:

## Declaring and Defining Simultaneously

When declaring a vector, you can also assign initial values simultaneously.

```cpp
std::vector<int> myvector (10, 6);
```

The code will declare a vector with ten elements, and each element will have the value 6.

## Declaring and Defining Simultaneously with Brackets

There is another way to initialize a vector as well if you are using one of the more recent versions of C++ such as C++11 or C++17; You could also do something like:

```cpp
std::vector<float> myvector = {5.0, 3.0, 2.7, 8.2, 7.9}
```

The different versions of C++ (C++98, C++11, C++14, and C++17) will be discussed in the Practical C++ lesson.

## Practice Declaring and Defining Vectors

In the space below, follow the TODOs. When you are finished, check out the solution.cpp file.

```cpp
#include <vector>

using namespace std;

int main() {
    
    vector<float> vector1(4);
    vector1[0] = 4.5;
    vector1[1] = 2.1;
    vector1[2] = 8.54;
    vector1[3] = 9.0;

    vector<float> vector(4, 3.5);
    
    return 0;
}
```

# Vector Methods

Vectors have a handful of useful functions, which you can see  [here](http://www.cplusplus.com/reference/vector/vector/). In this part of the lesson, you will go over the ones you will be using in the object oriented programming lesson.

## assign

Assign helps you quickly populate a vector with fixed values. For example this code,

```cpp
vector<int> intvariable;
intvariable.assign(10,16);
```

is going to populate the vector with ten integers all having the value of 16.

The assign method lets you override your current vector with a new vector.

Remember, you've already seen a similar way to initialize values in a vector:

```cpp
vector<int> intvariable(10,16);
```

The difference is that the assign method lets you override your current vector with new values.

## push_back

Pushback adds an element to the end of the vector:

```cpp
vector<int> intvariable;
intvariable.push_back(25);
```

## size

Size returns the size of the vector.

```cpp
intvariable.size();
```

## Practice with Vector Methods

Before getting practice with these vector methods, move on to the next section to learn about accessing vectors with for loops. In the next section, you'll combine the methods you just learned with for loops.

# Vectors and For Loops

Much of the time, you will be using for loops to manipulate vectors. Once you are comfortable using for loops with vectors, you can do things like:

-   populate a vector with values
-   do math with vectors

Here is a program that initializes a vector and then uses a for loop to populate the vector with values. Then another for loop reads out the vector values.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<float> example;

    for (int i = 0; i < 5; i++) {
        example.push_back(i*5.231);
    }

    for (int i = 0; i < example.size(); i++) {
        cout << example[i] << endl;
    }

    return 0;
}
```

The output looks like this:

```
0
5.231
10.462
15.693
20.924
```

## Using i++ Versus ++i

So far, you've learned to write C++ for loops like the following:

```cpp
for (int i = 0; i < 10; i++) {}
```

This syntax matches closely to the Python for loop syntax; however, you can also write a for loop like this:

```cpp
for (int i = 0; i < 10; ++i) {}
```

**What is the difference and why do both ways work?**

In practice, both i++ and ++i will give you the same results; these are a shorthand way of writing i = i + 1. The difference between the two is subtle.

```cpp
int i = 5;
int x = i++; // x = 5, i = 6 (called postfix)
int x = ++i; // x = 6, i = 6 (called prefix)
```

In both cases, the i variable increases by 1. In the postfix case, i++, int x = i is evaluated first and then i = i + 1 occurs.

In the prefix case, ++i, i = i + 1 occurs first and then int x = i executes.

Many code guidelines recommend using ++i over i++. In reality neither one is more efficient than the other when using integer variables.

However, there is a difference when you write a C++ class that overloads the ++ operator. You saw operational overloading in the Python matrix project; the code overloaded mathematical signs to carry out matrix addition, subtraction, multiplication, etc.

When overloading the postfix operator, C++ needs to keep track of two values. In the example, the values would be 5 and 6. For the prefix operator, C++ only needs to keep track of one value: 6. Hence, when overloading the ++ operator, it's generally more efficient to use prefix than the postfix.

Overloading is an advanced C++ topic that isn't covered in depth here. If you'd like to learn more, here are a few resources:

[Stackoverflow](https://stackoverflow.com/questions/3846296/how-to-overload-the-operator-in-two-different-ways-for-postfix-a-and-prefix)

[IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.2.0/com.ibm.zos.v2r2.cbclx01/cplr330.htm)

## Practice with Vector Methods and For Loops

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    
    // Part 1: declare and define a vector {5.0, 5.0, 5.0} and print it out
    vector<float> vectorvar(3, 5.0);
    
    for (int i = 0; i < vectorvar.size(); i++) {
        cout << vectorvar[i] << " ";
    }
    
    cout << endl;
    
    // Part 2: Use push back to add the values 3.0, 2.5, 1.4 to the back of the vector
    vectorvar.push_back(3.0);
    vectorvar.push_back(2.5);
    vectorvar.push_back(1.4);
    
    // Part 3: Print out the vector
    for (int i = 0; i < vectorvar.size(); i++) {
        cout << vectorvar[i] << " ";
    }
    cout << "\n";
    
    // Part 4: Use the assign method so that the current vector has values 
    // {5.0, 5.0, 5.0}
    vectorvar.assign(3, 5.0);
    
    // Part 5: Print out the vector
    for (int i = 0; i < vectorvar.size(); i++) {
        cout << vectorvar[i] << " ";
    }
    
    cout << "\n";

    return 0;
}
```

# Math and Vectors

Any vector math you did in Python, you can also do in C++ with for loops.

## Example 1

For example, you might want to multiply every element in a vector by a constant:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<float> example;

    // assign 5 floats with value 10
    example.assign(5,10.0);

    // print out the vector
    for (int i = 0; i < example.size(); i++) {
        cout << example[i] << endl;
    }

    // blank line outputted to terminal
    cout << endl;

    //multiply each value in the vector by 20
    for (int i = 0; i < example.size(); i++) {
        example[i] = 20 * example[i];
    }

    // print out the vector
    for (int i = 0; i < example.size(); i++) {
        cout << example[i] << endl;
    }


    return 0;
}
```

Which gives the output:

```
10
10
10
10
10

200
200
200
200
200
```

## Example 2

Or you might want to add two vectors together:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<int> exampleone (5);
    vector<int> exampletwo (5);
    vector<int> examplesum (5);

    exampleone[0] = 2;
    exampleone[1] = 6;
    exampleone[2] = 25;
    exampleone[3] = 1;
    exampleone[4] = 18;

    exampletwo[0] = 3;
    exampletwo[1] = 19;
    exampletwo[2] = 8;
    exampletwo[3] = 12;
    exampletwo[4] = 191;

    cout << "vector one ";

    // print out the first vector
    for (int i = 0; i < exampleone.size(); i++) {
        cout << exampleone[i] << " ";
    }

    // create a new line in the terminal
    cout << endl;

    cout << "vector two ";

    // print out the second vector
    for (int i = 0; i < exampletwo.size(); i++) {
        cout << exampletwo[i] << " ";
    }

    // create a new line in the terminal
    cout << endl;

    cout << "vector sum ";

    //add the vectors together
    for (int i = 0; i < exampleone.size(); i++) {
        examplesum[i] = exampleone[i] + exampletwo[i];
    }

    // print out the vector
    for (int i = 0; i < examplesum.size(); i++) {
        cout << examplesum[i] << " ";
    }

    // create a new line in the terminal
    cout << endl;

    return 0;
}
```

Which gives output:

```cpp
vector one 2 6 25 1 18 
vector two 3 19 8 12 191 
vector sum 5 25 33 13 209 
```

Now it's your turn to write programs with C++ vectors. Move on to the next part of the lesson to get some practice coding vectors.

# 1D Vector Playground
## Playground

Now it's your turn to make some programs with vectors. Here is a playground where you can write your program.

#### Idea 1

First, try writing a program that initializes a vector of size 3. The values for this vector are  [5, 10, 27][5,10,27]. Initialize another vector of size 3 with the values  [3, 17, 12][3,17,12]. Now subtract the two vectors from each other and output the results.

To get even more practice, write a function that takes in two vectors and then outputs the difference between the vectors. Assume that the two vectors are the same size; otherwise you would have to check that they are the same size and include some error checking.

#### Idea 2

Initialize a vector with the values  [17, 10, 31, 5, 7][17,10,31,5,7]. Initialize another vector with the values  [3, 1, 6, 19, 8][3,1,6,19,8]. Then, output another vector that contains the product of each element. In other words, the vector should have  [17\times3, \space10\times1, \space 31\times6, \space 5\times19, \space 7\times8][17×3, 10×1, 31×6, 5×19, 7×8].

To get even more practice, write a function that takes in two vectors and then outputs a new vector that is the result of element by element multiplication. Assume that the two vectors are the same size; otherwise you would have to check that they are the same size and do some error checking.

```cpp

// solution one

#include <iostream>
#include <vector>

using namespace std;

// function declaration
vector<float> vectorsubtraction(vector<float> vector1, vector<float> vector2);

// program that computes the difference between two vectors
int main() {

	// declare and initialize vectors
	vector<float> v1(3);
	vector<float> v2(3);
	
	v1[0] = 5.0;
	v1[1] = 10.0;
	v1[2] = 27.0;
	
	v2[0] = 2.0;
	v2[1] = 17.0;
	v2[2] = 12.0;
	
	vector<float> v3 (v1.size());

	// calculate the difference between the two vectors
	v3 = vectorsubtraction(v1, v2);

	// print out the results of the vector subtraction
	for (int i = 0; i < v3.size(); i++) {
		cout << v3[i] << " ";
	}

	cout << endl;
	
	return 0;

}

// define the function - 
// INPUTS: two vectors
// OUTPUT: the difference between the two vectors
vector<float> vectorsubtraction(vector<float> vector1, vector<float> vector2) {

	vector<float> vectordifference (vector1.size());

	for (int i = 0; i < vector1.size(); i++) {
		vectordifference[i] = vector1[i] - vector2[i];
	}

	return vectordifference;

}
```

```cpp

// solution two

#include <iostream>
#include <vector>

using namespace std;

// function declaration
vector<float> vectormultiply(vector<float> vector1, vector<float> vector2);

// program that computes the element-wise multiplication of two vectors
int main() {

	// declare and initialize vectors
	vector<float> v1(5);
	vector<float> v2(5);
	
	v1[0] = 17.0;
	v1[1] = 10.0;
	v1[2] = 31.0;
	v1[3] = 5.0;
	v1[4] = 7.0;

	v2[0] = 3.0;
	v2[1] = 1.0;
	v2[2] = 6.0;
	v2[3] = 19.0;
	v2[4] = 8.0;

	vector<float> v3 (v1.size());

	// calculate the difference between the two vectors
	v3 = vectormultiply(v1, v2);

	// print out the results of the vector multiplication
	for (int i = 0; i < v3.size(); i++) {
		cout << v3[i] << " ";
	}

	cout << endl;
	
	return 0;

}

// define the function - 
// INPUTS: two vectors
// OUTPUT: multiplies elements together into a new vector
vector<float> vectormultiply(vector<float> vector1, vector<float> vector2) {

	vector<float> vectorproduct (vector1.size());

	for (int i = 0; i < vector1.size(); i++) {
		vectorproduct[i] = vector1[i] * vector2[i];
	}

	return vectorproduct;

}
```

# Two Dimensional Vectors

Next, you are going to use vectors to store matrices. Much like how Python uses a list of lists to store matrices, for the C++ lessons you will use a vector of vectors. The syntax for declaring two-dimensional vectors is a bit tricky.

Say you're using Python and want to store a 3 by 5 matrix. You could do something like this:

```cpp
matrixexample = [[2, 1, 5], [7, 9, 2], [16, 5, 9], [5, 2, 1], [1, 2, 4]]
```

In C++, you are going to create a similar structure by appending vectors to vectors. Here is a comparison of Python and C++ code to see what this looks like:

![](https://video.udacity-data.com/topher/2017/September/59ab2bfd_copy-of-template/copy-of-template.png)

## Explanation of the Code

First, the line

```cpp
vector < vector <int> > twodvector;
```

declares an empty two dimensional vector named twodvector. A couple of things to notice:

-   like with all variables in C++, you have to declare what type of values will go into the vector. In this case, integers will go into the twodvector variable.
-   Notice the spaces between brackets  `< vector <int> >`. Your program probably won't run if the spacing is not done correctly.

Then a one dimensional vector called singlerow is declared. The singlerow vector has the form [2, 2, 2].

```cpp
vector<int> singlerow (3,2);
```

Then the singlerow vector is appended to the twodvector five times:

```cpp
    for (int i = 0; i < 5; i++) {
        twodvector.push_back(singlerow);
    }
```

You end up with the same two-dimensional structure just like in the Python code. If you were to run this C++ code, the terminal would print out:

```
2 2 2 
2 2 2 
2 2 2 
2 2 2 
2 2 2 
```

## Alternative Initialization

Here is another way you could have set up the vector from the previous example:

```cpp
vector < vector <int> > twodvector (5, vector <int> (3, 2));
```

The syntax is a little bit more complicated. But if you start from the inside of the parenthesis and work your way out, you see that you have already seen all of the functionality.

The line:

```cpp
vector <int> (3, 2) 
```

would set up an integer vector like {2, 2, 2}. So even though you don't see the inner vector, the code is essentially doing something like this:

```cpp
vector < vector <int> > twodvector (5, {2, 2, 2});
```

So then the code copies {2, 2, 2} five times into the twodvector variable:

```cpp
{{2, 2, 2},
{2, 2, 2},
{2, 2, 2},
{2, 2, 2},
{2, 2, 2}}
```

Just keep in mind that only Python represents vectors or matrices with square brackets []. Newer versions of C++ can use squiggly brackets to represent vectors {}, but older implementations of C++ do not have an equivalent representation.

A line of code like the following would not run in C++:

```cpp
vector < vector <int> > twodvector (5, [2, 2, 2]);
```

# 2D Vectors and For Loops

Because 2D vectors are just vectors inside a vector, a 2D vector has the  [same methods](http://www.cplusplus.com/reference/vector/vector/)  as a 1D vector.

That way the cout code from the example works:

```cpp
for (int row = 0; row < twodvector.size(); row++) {
        for (int column = 0; column < twodvector[0].size(); column++) {
            cout << twodvector[row][column] << " ";
        }
        cout << endl;
```

When you type  `twodvector.size()`, that will give you the size of the outside vector. The outside vector had five elements, which represents the number of rows in the matrix being represented:

```cpp
{2 2 2} 
{2 2 2} 
{2 2 2} 
{2 2 2} 
{2 2 2}
```

When you write  `twodvector[0].size()`, you are taking the first element of the outside vector, [2 2 2], and asking for the size of that vector, which in this case is three. So essentially the for loop is saying:

```cpp
for (int row = 0; row < 5; row++) {
        for (int column = 0; column < 3; column++) {
            cout << twodvector[row][column] << " ";
        }
        cout << endl;
```

### Program your Own Matrix Function

Practice coding matrices in C++. In this exercise, write a function that has two integer matrices as inputs and then outputs the sum. Assume that the two input matrices have the same size (e.g. matrix one is 5x3 and matrix two is 5x3).

You can find an implementation in the solution.cpp tab if you'd like to compare your solution.

You can use the Test Run button to run your code.

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector < vector <int> > matrixsum(vector < vector <int> > matrix1, vector < vector <int> > matrix2);
void matrixprint(vector < vector <int> > inputmatrix);

int main() {

	// declare two matrices
	vector < vector <int> > matrix1 (5, vector <int> (3, 2));
	vector < vector <int> > matrix2 (5, vector <int> (3, 26));

	//declare an empty matrix to hold the result
	vector < vector <int> > matrixresult; 

	//calculate the sum of the two matrices
	matrixresult = matrixsum(matrix1, matrix2);

	// call the matrix print function to print out the results
	matrixprint(matrixresult);

	return 0;
}

//function to add two matrices together
vector < vector <int> > matrixsum(vector < vector <int> > matrix1, vector < vector <int> > matrix2) {

	// declare a matrix with the same size as matrix1 and matrix2
	vector < vector <int> > matrixsumresult (matrix1.size(), vector <int> (matrix1[0].size(), 0));

	// iterate through matrix1 and assign the sum of each element to the results matrix
	for (int row = 0; row < matrix1.size(); row++) {
		for (int column = 0; column < matrix1[0].size(); column++) {
			matrixsumresult[row][column] = matrix1[row][column] + matrix2[row][column];
		}

	}

	return matrixsumresult;


}

// function to print an integer matrix
void matrixprint(vector < vector <int> > inputmatrix) {

	for (int row = 0; row < inputmatrix.size(); row++) {
		for (int column = 0; column < inputmatrix[0].size(); column++) {
			cout << inputmatrix[row][column] << " ";
		}
		cout << endl;

	}
}
```

# Introduction to Compilation

Watch [this video](https://youtu.be/dyzGEB8YDGg).

Thus far, you've been writing code within the Udacity classroom. But you will also want to be able to run your programs locally on your own computer. This brings up another difference between Python and C++. You learned about the first major difference at the beginning of the C++ lesson; Python is dynamically typed while C++ is statically typed. Another major difference is that Python is an  **interpreted language**  whereas C++ is a  **compiled language**.

When you write code in Python or C++, your computer can't actually understand the code that you are writing. But we humans can read and understand these languages, so they are convenient for us to code in.

Your code needs to be translated into a language that your CPU understands. Interpreted languages and compiled languages get translated in different ways. When you run a Python program, there is a translator (ie an interpreter), that reads a line of your code, translates a line of code for the CPU, and then executes your code line on the CPU. Then the next line gets translated and executed. Then the next, etc. The reality is a bit more complex, but that is the gist of an interpreted language like Python.

A compiled language, on the other hand, translates all of your code into the CPU's language. And then your code gets executed. So when running a C++ program, there is an extra step where you first compile your code and then a second step where you execute your code. Python, on the other hand, only has the execution step.

The C++ code you have been writing in the classroom actually is being compiled first and then executed, but it's happening behind the scenes. If you want to run your C++ programs locally on your computer, you're going to need to first compile the code and then execute it yourself.

In the next part of the lesson, you will get your own computer ready for compiling and executing C++ programs.

# Running Code Locally

If you haven't already tried running your C++ code locally, now's the time to get things working. In the C++ section, we mentioned how to get code to run locally on your computer. Here are the instructions again for your reference:

Here are some suggested programs for writing and executing your code locally:

-   [Sublime Text](https://www.sublimetext.com/)  as a general text editor
-   Download an IDE (Integrated Development Environment) such as  [Xcode](https://developer.apple.com/xcode/downloads/)  (Mac only),  [Visual Studio](https://www.visualstudio.com/downloads/)  or any other IDE.

### Detailed Setup Instructions

Big thanks to Michael Ikemann! Michael is a student in this Nanodegree and put together some  **exceptionally**  detailed documentation to help you get started with C++.

-   [Windows C++ Setup Guide](https://docs.google.com/document/d/1PA3YcIKpANBZuHLX6tz7bVw60ug_DM1_V_yFKyrMP-s/edit?usp=sharing)
    -   Per student Tarun, the guide document for IDE setup suggests moving the .sln file to parent directory, along with the .vcproj file. To avoid errors, the .sln file needs to be hand modified with updated path.
-   [Mac C++ Setup Guide](https://docs.google.com/document/d/1FoIc9X0NcM-0y0dgXCzJcpu5lVXGFqS62mb1ABLDT1M/edit)

Below you'll find further instructions as well, although Michael's documents should be enough to get things running.

### Compiling and Executing C++ Code

If you are on a Windows, Mac, or Linux machine, the basic process is going to be the same; you will compile your code and then execute the compiled code. But the details of how to do this are slightly different on different machines and operating systems.

And there are two different ways you can compile and execute your code:

-   using the windows console/mac terminal/linux terminal
-   using an IDE (Integrated Development Environment), which is a software program that makes it easier to write, organize, compile and run your code.

### Running your Code through the Console or Terminal

This is the quickest way to get started compiling and executing your code.

#### For Windows

You will first need to download and install the  [Visual C++ Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15), which are provided by Microsoft. The installation process might vary depending on what version of windows you are using. The microsoft website has a helpful guide about how to make sure the installation went correctly. The guide also explains how to compile and run your code:  [microsoft instructions](https://docs.microsoft.com/en-us/cpp/build/walkthrough-compiling-a-native-cpp-program-on-the-command-line).

If the Visual C++ Build Tools are installed, you should be able to compile and execute your code from the console. For example, if you have a main.cpp, you would open the console and navigate to the directory with the file.

You will see that the microsoft tutorial suggests compiling your code with the following command:

```bash
cl /W4 /EHsc main.cpp
```

The /W4 and /EHsc are options that will compile your code with warnings and  [error handing](https://docs.microsoft.com/en-us/cpp/build/reference/eh-exception-handling-model).

The compiler outputs an .obj file, which contains the instructions for the CPU. You will also see a .exe file that will get your code running.

Now typing

```bash
main
```

at the command prompt should get your program running.

If your program has multiple .cpp files, then you compile with:

```bash
cl /W4 /EHsc file1.cpp file2.cpp file3.cpp
```

The name of the .obj and .exe files will be file1.

### For Mac

Depending on your OS version, the installation process will be different. In general, you will need to download the "command line developer tools" from the Apple developer website.

As a first step, see if you already have a compiler on your system called  **g++**. Open the Terminal application, and type

```bash
g++
```

If g++ is installed, you should get an error message like  `no input files`. If g++ is not installed and you are using a relatively newer version of Mac OS, a dialogue box will pop up asking you if you would like to install the command line tools. Click "Install".

However, on older Mac OS systems, you'll need to go to the Apple developer's website and download the command line developer tools. Go to this  [link](https://developer.apple.com/download/). You will need to create an Apple ID if you do not already have one. Enter your Apple ID and password.

On the downloads page, there is a search box in the top left corner. Search for "command line developer tools". Then download and install the developer tools for your OS version.

Now go back to the Terminal and type

```bash
g++
```

You should now get an error message  `no input files`.

To compile a program you would type:

```bash
g++ filename.cpp
```

or with multiple .cpp files:

```bash
g++ filename1.cpp filename2.cpp filename3.cpp
```

The compiler will create an executable file named  `a.out`. To run your program, in terminal type:

```bash
./a.out
```

### For Linux Ubuntu

The g++ compiler might already be on your system. If you are using Ubuntu, open Terminal and type:

```bash
dpkg --list | grep compiler
```

You will see a list of compilers. Check if g++ is in the list. If not, you can install g++ by typing:

```bash
sudo apt-get install g++
```

The commands to compile and run a program are the same as for Mac:

```bash
g++ filename.cpp
./a.out
```

### Using an IDE

Another option is to download an IDE (Integrated Development Environment) to help write, organize, debug, compile and execute your code.

Microsoft provides an IDE called Visual Studio, which you can download here:  [Visual Studio](https://www.visualstudio.com/). Up until recently, Visual Studio was only available for Windows. But there is also a Mac version as well.

For Mac users, Apple also provides an IDE called Xcode, which you can download  [here](https://developer.apple.com/xcode/).

You can use either of these IDEs to help you develop your C++ programs.

For Linux Ubuntu users, there are a number of free IDEs available such as  [NetBeans](https://netbeans.org/features/cpp/index.html),  [Code::Blocks](http://www.codeblocks.org/),  [Eclipse](https://www.eclipse.org/cdt/), and  [CodeLite](https://codelite.org/).

# Versions of C++

The  [International Organization for Standardization](https://www.iso.org/home.html)  publishes standards for the C++ language. Every few years the standard is updated with new features and syntax. The C++ standards are written documents providing guidelines for what the C++ language should be able to do and what the language looks like.

The responsibility for implementing a standard is left to the company, person or team that designs a compiler; hence, not all compilers implement all features. And some compilers might implement a feature differently.

There are currently five published C++ standards with the earliest standard called  **C++98**  and the most recent standard  **C++17**. The number designates the year in which the standard was published such as 1998 and 2017.

Thus far, the classroom has been compiling your code with the oldest standard:  **C++98**. We have used C++98 so that you could get the basics of C++ down without worrying about advanced features.

As an example of a more advanced features,  **C++11**, allows you to initialize a vector with the following syntax:

```cpp
vector<int> myvector = {5, 4, 9, 1, 10}
```

There is generally a lag of a few years between publication of a standard and industry adoption.

# GCC Compiler

The classroom uses a compiler called gcc. Thus far, we have been compiling your code for you when you hit the "Test Run" button. In the "Performance Programming C++" module, you will use a different interface for writing, compiling and running your code. This interface also uses the gcc compiler.

In the classroom, gcc compiles with C++98 by default. As you will see, you can use the command line to tell gcc what version of C++ to use:

```cpp
g++ -std=c++11 main.cpp
```

You might find different behavior on your system because of the compiler you are using or because of your compiler options.

# Structuring your Functions

In the last lesson, you learned two different ways for declaring and defining functions:

-   declaring functions above main() and defining functions below main
-   declaring and defining functions simultaneously above main

As your C++ programs get longer and more complex, you might want to separate your code into multiple files. Keeping function definitions and declarations separate will help you with splitting and organizing your code.

For example, take a look at this code from the functions quiz in the previous lesson.

```cpp
#include <iostream>

float distance(float velocity, float acceleration, float time_elapsed);

int main() {

    std::cout << distance(3, 4, 5) << std::endl;  
    std::cout << distance(7.0, 2.1, 5.4) << std::endl;

    return 0;   
}

float distance(float velocity, float acceleration, float time_elapsed) {
    return velocity*time_elapsed + 0.5*acceleration*time_elapsed*time_elapsed;
}
```

Instead of putting everything into a main.cpp like in the previous quiz, the code could be organized into two files. Check out the code below and hit the "Test Run" button.

```cpp

// main.cpp
#include <iostream>

float distance(float velocity, float acceleration, float time_elapsed);

int main() {

    std::cout << distance(3, 4, 5) << std::endl;  
    std::cout << distance(7.0, 2.1, 5.4) << std::endl;
    
    return 0;   
}
```

```cpp

// distance.cpp
float distance(float velocity, float acceleration, float time_elapsed) {
    return velocity*time_elapsed + 0.5*acceleration*time_elapsed*time_elapsed;
}
```

Behind the scenes, both main.cpp and distance.cpp are being compiled. This is happening on the backend of the classroom, so you are not seeing the compilation happen.

But if you were to run this program locally, you could open a terminal and navigate to the folder containing both files. Typing something like

```bash
g++ main.cpp distance.cpp
./a.out
```

would compile both files together and then execute the program.

Because you have defined your function in a separate file outside of main.cpp, you can more easily re-use the function in other parts of your code.

Notice that you still had to declare the distance function at the top of main.cpp to be able to use the function.

### Header Files

The function declaration

```cpp
float distance(float velocity, float acceleration, float time_elapsed);
```

is oftentimes put into its own file as well. The declaration is kept in what's called a  **header**  file because the header is the information above the main() function. Header files generally have either a .h or .hpp extension. Here is the same code above but with the function declaration in a header file. If you click the "Test Run" button, you'll see that this code works as well:

```cpp

// distance.h
float distance(float velocity, float acceleration, float time_elapsed);
```

The code line

```cpp
#include "distance.h"
```

will paste the contents of distance.h into main.cpp.

Now let's say you wanted to reuse your distance function in a different file. All you have to do is declare the function at the top of your new file with an include statement:

```cpp
#include "distance.h"
```

and you can use the function in another part of your program.

Organizing your code into different .cpp files separates out the implementation from the declaration. Furthermore, using header files means that you do not have to remember what the function declaration looked like because you can include it with the simple syntax of

```cpp
#include "distance.h"
```

To compile the code, you only need to compile the .cpp files but not the .h file:

```bash
g++ main.cpp distance.cpp
```

### File Naming

Naming conventions dictate that the header file and associated cpp file have the same name. Therefore it's clear that distance.h contains the header declarations for distance.cpp. You'll also notice that the function name itself was called distance(). So the function name, .cpp and .h files all match.

These are naming conventions, so your C++ code will still compile if you do not follow these conventions; however, it's highly recommended to stick with these conventions.

### Include syntax

You might be wondering why there are two different types of include statements:

```cpp
#include <iostream>
#include "distance.h"
```

The include statement with quotes tells the program to look for the distance.h file in the current directory.

The <> syntax will depend on your C++ environment. Generally, environments are set up to look for the file where the C++ libraries are stored like the Standard Library.

# Input and Output

There is one last topic to discuss before moving onto the C++ Object Oriented Programming Lesson.

You have already seen how to call a function and then output the results to the terminal using cout. As an example:

```cpp
std::cout << distance(3, 4, 5);
```

But how do you get user input from the terminal? Or how do you input data from a file into your program or write out your results to a file?

## cin

Much like the Standard Library provides a function for outputting to the terminal, the library also provides a function for reading in data from the terminal.

This code demonstrates how to use cin:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {

    int integerone; 
    int integertwo;

    // declare array and assign values
    cout << "Enter an integer between 1 and 100" << endl;
    cin >> integerone;

    cout << "Enter another integer between 1 and 100" << endl;
    cin >> integertwo;

    // output the difference
    cout << "The difference between your two numbers is: ";
    cout << integerone - integertwo << endl;


    return 0;
}
```

To see how this code works, you will need to put the code into a .cpp file and run the program locally. The classroom playground does not allow for user input.

Next, you will learn how to input data from an external file.

# Reading in Text Files

The Standard Library includes functionality for reading text files line by line. You can then parse each line of the text file one line at a time.

Say, for example, you have a text file with numbers and commas representing a 3 by 4 matrix:

```
1, 6, 2, 10.5
11, 15.2, 2, 21
3, 9, 1, 7.5
```

You want to read in this file and create a 2D vector to represent the matrix. Here is code to do this, and then below you can run the code to see that it works.

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>

using namespace std;

int main() {

    // initialize string variables for reading in text file lines 
    string line;
    stringstream ss;

    // initialize variables to hold the matrix
    vector < vector <float> > matrix;
    vector<float> row;

    // counter for characters in a text file line
    float i;

    // read in the file
    ifstream matrixfile ("matrix.txt");

    // read in the matrix file line by line
    // parse the file

    if (matrixfile.is_open()) {
        while (getline (matrixfile, line)) {

            // parse the text line with a stringstream
            // clear the string stream to hold the next line
            ss.clear();
            ss.str("");
            ss.str(line);
            row.clear();

            // parse each line and push to the end of the row vector
            // the ss variable holds a line of text
            // ss >> i puts the next character into the i variable. 
            // the >> syntax is like cin >> some_value or cout << some_value
            // ss >> i is false when the end of the line is reached

            while(ss >> i) {
                row.push_back(i);

                if (ss.peek() == ',' || ss.peek() == ' ') {
                    ss.ignore();
                }
            }

            // push the row to the end of the matrix
            matrix.push_back(row);
        }

        matrixfile.close();

        // print out the matrix
        for (int row = 0; row < matrix.size(); row++) {
            for (int column = 0; column < matrix[row].size(); column++) {
                cout << matrix[row][column] << " " ;
            }
            cout << endl; 
        }
    }

    else cout << "Unable to open file";

    return 0;
}
```

Here is a demonstration of how to read in data from a text file. The code reads in a tile file that contains data for a matrix. Then the code outputs the matrix to the terminal display. Read through the code to try to figure out what it does. Then run the code by pressing the "Test Run" button.

Below the demo, there is an explanation of what the code is doing.

```cpp

// main.cpp
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>

using namespace std;

int main() {

    // initialize string variables for reading in text file lines 
    string line;
    stringstream ss;

    // initialize variables to hold the matrix
    vector < vector <float> > matrix;
    vector<float> row;

    // counter for characters in a text file line
    float i;

    // read in the file
    ifstream matrixfile ("matrix.txt");

    // read in the matrix file line by line
    // parse the file

    if (matrixfile.is_open()) {
        while (getline (matrixfile, line)) {

            // parse the text line with a stringstream
            // clear the string stream to hold the next line
            ss.clear();
            ss.str("");
            ss.str(line);
            row.clear();

            // parse each line and push to the end of the row vector
            while(ss >> i) {
                row.push_back(i);

                if (ss.peek() == ',' || ss.peek() == ' ') {
                    ss.ignore();
                }
            }

            // push the row to the end of the matrix
            matrix.push_back(row);
        }

        matrixfile.close();

        // print out the matrix
        for (int row = 0; row < matrix.size(); row++) {
            for (int column = 0; column < matrix[row].size(); column++) {
                cout << matrix[row][column] << " " ;
            }
            cout << endl; 
        }
    }

    else cout << "Unable to open file";

    return 0;
}
```

```txt
# matrix.txt
1, 6, 2, 10.5
11, 15.2, 2, 21
3, 9, 1, 7.5
```

There are two parts of the code that you haven't seen yet: fstream and sstream. Both of these files are part of the C++ Standard Library.

fstream provides functions and classes for reading in and outputting files.

This line of code reads in the file "matrix.txt" and then creates an object called "matrixfile" that you can use for reading in the text file:

```cpp
    ifstream matrixfile ("matrix.txt");
```

The if statement that follows checks that the file opened correctly:

```cpp
    if (matrixfile.is_open()) {
```

and then a while loop reads the file one line at a time. Each line is placed into a variable called "line":

```cpp
    if (matrixfile.is_open()) {
        while (getline (matrixfile, line)) {
```

If you look at the text file, each line in this case is a string consisting of floats, commas and spaces. For example, "1, 6, 2, 10.5".

The sstream file in the Standard Library provides functionality for manipulating and parsing the string. In the code, you'll see that first a sstream object was declared and then later the ss object was used to cycle through and parse each line of the text file:

```cpp
stringstream ss;

....

ss.clear();
ss.str("");
ss.str(line);

while(ss >> i) {
    row.push_back(i);

    if (ss.peek() == ',' || ss.peek() == ' ') {
        ss.ignore();
    }
}
```

In other words, the code finds a float number and appends the number to the vector called row. The line  `ss.peek()`  looks at the next character to see if it is a comma or a space and ignores commas or spaces.

Note as well that when you are done with reading in the file, it's a good habit to close the file.

```cpp
matrixfile.close();
```

If you ever write a programming that opens many files simultaneously and never closes them, your program could crash.

# Outputting to Text Files

Much like how you can input data from a file, you can also output data to a file. Say you have a matrix and you want to save the results to a text file. You'll see that the code for outputting the matrix to a file looks quite similar to the code for outputting the matrix to the terminal.

You will need to run this code locally in order to see the outputted text file.

```cpp
#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

int main() {

    // create the vector that will be outputted
    vector < vector <int> > matrix (5, vector <int> (3, 2));
    vector<int> row;

    // open a file for outputting the matrix
    ofstream outputfile;
    outputfile.open ("matrixoutput.txt");

    // output the matrix to the file
    if (outputfile.is_open()) {
        for (int row = 0; row < matrix.size(); row++) {
            for (int column = 0; column < matrix[row].size(); column++) {
                if (column != matrix[row].size() - 1) {
                    outputfile << matrix[row][column] << ", ";
                }
                else {
                    outputfile << matrix[row][column];
                }
            }
            outputfile << endl; 
        }
    }

    outputfile.close();

    return 0;
}
```

You can see that you need to create an ofstream object and then use the object to create a new file.

```cpp
    ofstream outputfile;
    outputfile.open ("matrixoutput.txt");
```

The rest of the code iterates through the matrix and outputs the matrix in the format you specify in the code:

```cpp
    if (outputfile.is_open()) {
        for (int row = 0; row < matrix.size(); row++) {
            for (int column = 0; column < matrix[row].size(); column++) {
                if (column != matrix[row].size() - 1) {
                    outputfile << matrix[row][column] << ", ";
                }
                else {
                    outputfile << matrix[row][column];
                }
            }
            outputfile << endl; 
        }
    }
```

The if statement is checking whether or not the end of the row is reached. If the current value is the end of a row, it's not necessary to put a comma separator after the number:

```cpp
                if (column != matrix[row].size() - 1) {
                    outputfile << matrix[row][column] << ", ";
                }
                else {
                    outputfile << matrix[row][column];
                }
```

# C++: Objected Oriented Programming
# How the Lesson is Organized

This lesson has two parts. In the first part, we show you a complete Python class and its equivalent in C++. You'll get an overview of what C++ classes look like and how to use them.

Then, in the second part, you'll code your own C++ class building up the code piece by piece. By the end of the lesson, you should feel comfortable reading C++ object oriented code and writing a basic class; however, remember that learning a new programming language takes practice. And C++ is often considered a language that takes  [years to master](https://www.quora.com/How-long-does-it-take-to-learn-C++-coding-on-an-average-level).

# Example: Python Class

Let's go directly to an example. Below is the code for a Python class called 'Gaussian'.

You learned about Gaussian distributions and saw the Gaussian equation earlier in the nanodegree. This class stores the values for the standard deviation and mean. The class also has methods for calculating the probability density function, the sum of two gaussians, and the product of two gaussians.

The class contains two class variables called  `mu`, which is the average and  `sigma2`, which is the variance.

Here is a summary of the three methods contained in the class:

1.  `evaluate`, which represents the probability density function: _normal probability function equation_
2.  `multiply`, which multiplies two independent Gaussian distributions together
3.  `add`, which adds two independent Gaussian distributions together

Read through the code so that you understand how the class works.

### Python Code for a Gaussian Class

```python
class Gaussian():

    def __init__(self, mean, variance):
        self.mu = mean
        self.sigma2 = variance

    def evaluate(self, x):
        coefficient = 1.0 / sqrt(2.0 * pi * self.sigma2)
        exponential = exp(-0.5 * (x-self.mu) ** 2 / self.sigma2)
        return coefficient * exponential

    def multiply(self, other):
        # calculate new mean
        denominator = self.sigma2 + other.sigma2
        numerator = self.mu * other.sigma2 + other.mu * self.sigma2
        new_mu = numerator / denominator

        # calculate new variance
        new_var = 1.0 / ( (1.0 / self.sigma2) + (1.0 / other.sigma2) )

        # generate new gaussian
        return Gaussian(new_mu, new_var)

    def add(self, other):
        new_mu = self.mu + other.mu
        new_sigma2 = self.sigma2 + other.sigma2

        return Gaussian(new_mu, new_sigma2)
```

# Example: C++ Class

Now, you will take a look at an equivalent class in C++. Like in other cases you have already seen, the C++ code is longer and has aspects that the Python version did not have. It takes more time and practice to learn object oriented programming in C++ compared to Python.

For example, you will notice that in the C++ class, all of its variables and all of its functions need to be declared first before writing the implementation. The class also has a part labeled  `private`  and another part labeled  `public`. Furthermore, the C++ class includes extra functions like  `setMu`,  `setSigma2`,  `getMu`, and  `getSigma2`.

You are going to learn about all of these differences in this lesson. For now, read through the code and see if you can figure out what the  _set_  functions and  _get_  functions do. Then answer the quiz at the bottom of the page.

```cpp
#include <math.h>

class Gaussian
{
    // private variable declaration
    private:
        float mu, sigma2;

    // public variable and function declarations
    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian multiply (Gaussian);
        Gaussian add (Gaussian);
};

// constructor function definitions
Gaussian::Gaussian() {
    mu = 0;
    sigma2 = 1;    
}

Gaussian::Gaussian (float average, float sigma) {
    mu = average;
    sigma2 = sigma;
}

// set function definitions
void Gaussian::setMu (float average) {
    mu = average;
}

void Gaussian::setSigma2 (float sigma) {
    sigma2 = sigma;
}

// get function definitions
float Gaussian::getMu () {
    return mu;
}

float Gaussian::getSigma2() {
    return sigma2;
}

// evaluate function definition
float Gaussian::evaluate(float x) {
    float coefficient;
    float exponential;

    coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
    exponential = exp ( pow (-0.5 * (x - mu), 2) / sigma2 );
    return coefficient * exponential;
}

// multiply function definition
Gaussian Gaussian::multiply(Gaussian other) {
    float denominator;
    float numerator;
    float new_mu;
    float new_var;

    denominator = sigma2 + other.getSigma2();
    numerator = mu * other.getSigma2() + other.getMu() * sigma2;
    new_mu = numerator / denominator;

    new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

    return Gaussian(new_mu, new_var);
}

// add function definition
Gaussian Gaussian::add(Gaussian other) {

    float new_mu;
    float new_sigma2;

    new_mu = mu + other.getMu();
    new_sigma2 = sigma2 + other.getSigma2();

    return Gaussian(new_mu, new_sigma2);
}
```

# Why objected oriented?

Watch [this video](https://youtu.be/G2KzZfNu9Ak).

# Using a Class in a Program

Let's start with the big picture. We've written code below with a fully implemented class and a main.cpp file that uses the class. Even though you might not be familiar with some of the C++ syntax, your knowledge of Python object oriented programming should help you understand what the C++ code is doing.

Study the code and then run the code as instructed below.

# Main.cpp and Gaussian.cpp

At the bottom of the page, you'll find a main.cpp file and a gaussian.cpp file so that you can see how they work together.

The gaussian.cpp file contains the class definition including all the variables and functions that the Gaussian class needs. You would make a similar file in Python probably called gaussian.py.

The main.cpp file uses the class to run some calculations. You'll see one important difference between C++ and Python. In C++, you need to declare your class before you can use the class. Both main.cpp and gaussian.cpp have the same class declaration at the top of their files:

```cpp
class Gaussian
{
    private:
        float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian mul (Gaussian);
        Gaussian add (Gaussian);
};
```

Below are all of the files that would be used in this code so that you can see the relationship between the main.cpp and gaussian.cpp

You can't see it on the backend, but this program is first being compiled via the command:

```bash
g++ main.cpp gaussian.cpp
```

Study the two files, and then click the "Test Run" button to run the code and see the results.

```cpp

// main.cpp
#include <iostream>

// class declaration
class Gaussian
{
	private:
		float mu, sigma2;

	public:
		
		// constructor functions
		Gaussian ();
		Gaussian (float, float);

		// change value of average and standard deviation 
		void setMu(float);
		void setSigma2(float);

		// output value of average and standard deviation
		float getMu();
		float getSigma2();

		// functions to evaluate 
		float evaluate (float);
		Gaussian mul (Gaussian);
		Gaussian add (Gaussian);
};

int main ()
{

	Gaussian mygaussian(30.0,100.0);
	Gaussian othergaussian(10.0,25.0);
	
	std::cout << "average " << mygaussian.getMu() << std::endl;
	std::cout << "evaluation " << mygaussian.evaluate(15.0) << std::endl;

	std::cout << "mul results variance " << mygaussian.mul(othergaussian).getSigma2() << std::endl;
	std::cout << "mul results average " << mygaussian.mul(othergaussian).getMu() << std::endl;

	std::cout << "add results variance " << mygaussian.add(othergaussian).getSigma2() << std::endl;
	std::cout << "add results average " << mygaussian.add(othergaussian).getMu() << std::endl;

	return 0;
}
```

```cpp

// gaussian.cpp
#include <math.h>       /* sqrt, exp */

// class declaration
class Gaussian
{
	private:
		float mu, sigma2;

	public:
		
		// constructor functions
		Gaussian ();
		Gaussian (float, float);

		// change value of average and standard deviation 
		void setMu(float);
		void setSigma2(float);

		// output value of average and standard deviation
		float getMu();
		float getSigma2();

		// functions to evaluate 
		float evaluate (float);
		Gaussian mul (Gaussian);
		Gaussian add (Gaussian);
};


Gaussian::Gaussian() {
	mu = 0;
	sigma2 = 1;	
}

Gaussian::Gaussian (float average, float sigma) {
	mu = average;
	sigma2 = sigma;
}

void Gaussian::setMu (float average) {
	mu = average;
}

void Gaussian::setSigma2 (float sigma) {
	sigma2 = sigma;
}


float Gaussian::getMu () {
	return mu;
}

float Gaussian::getSigma2() {
	return sigma2;
}

float Gaussian::evaluate(float x) {
	float coefficient;
	float exponential;

	coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
	exponential = exp ( pow (-0.5 * (x - mu), 2) / sigma2 );
	return coefficient * exponential;
}

Gaussian Gaussian::mul(Gaussian other) {
	float denominator;
	float numerator;
	float new_mu;
	float new_var;

	denominator = sigma2 + other.getSigma2();
	numerator = mu * other.getSigma2() + other.getMu() * sigma2;
	new_mu = numerator / denominator;

	new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

	return Gaussian(new_mu, new_var);
}

Gaussian Gaussian::add(Gaussian other) {

	float new_mu;
	float new_sigma2;

	new_mu = mu + other.getMu();
	new_sigma2 = sigma2 + other.getSigma2();

	return Gaussian(new_mu, new_sigma2);
}
```

# Explanation of the Main.cpp File

In the previous section, there were two files. The gaussian.cpp contained the code that defined the Gaussian class. The main.cpp used the Gaussian class.

The main.cpp file had three parts:

-   a header, which is where the #include statements were
-   a class declaration
-   a main function.

# Header

You saw headers in the C++ getting started lessons. In the main.cpp, the header included the iostream library for outputting to the terminal:

```
#include <iostream>

```

# Class Declaration

Then comes the class declaration. The class declaration is very similar to function declarations, which you learned about previously. In fact, as you'll see later in the lesson, you can put the class declaration into a separate .h file just like you did with function declarations.

The purpose of the class declaration is to give the main function access to the Gaussian class.

```cpp
// class declaration
class Gaussian
{
    private:
        float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian mul (Gaussian);
        Gaussian add (Gaussian);
};
```

Notice that a class declaration looks a lot like the variable declarations and function declarations you've already been using. Declarations tell the program what the variable types will be. The declarations also show the input and output types for functions.

# Main Function

And finally comes the main function. The main function instantiates objects of the Gaussian class. So the main function uses the class whereas gaussian.cpp defined the class. You could take the code in gaussian.cpp and put it at the bottom of main.cpp; however, your code files will become quite large and hard to read through.

Here is the code from the main function:

```cpp
int main ()
{

    Gaussian mygaussian(30.0,20.0);
    Gaussian othergaussian(10.0,30.0);

    std::cout << "average " << mygaussian.getMu() << std::endl;
    std::cout << "evaluation " << mygaussian.evaluate(15.0) << std::endl;

    std::cout << "mul results sigma " << mygaussian.mul(othergaussian).getSigma2() << std::endl;
    std::cout << "mul results average " << mygaussian.mul(othergaussian).getMu() << std::endl;

    std::cout << "add results sigma " << mygaussian.add(othergaussian).getSigma2() << std::endl;
    std::cout << "add results average " << mygaussian.add(othergaussian).getMu() << std::endl;

    return 0;
}
```

# Practice Using a Class

We are providing the Gaussian class from the previous demo. Now it's your turn to use the class in a program. Fill in the TODOs in the main.cpp file. You'll find a solution in the solution.cpp tab. If you get stuck, go back to the lesson node titled "Using a Class in C++ [Demo]" and study the example.

```cpp

// main.cpp

int main ()
{
 /*
TODO: Instantiate a Gaussian object called gaussianone.The object
should have mean = 40.0 and variance (aka sigma2) = 225.0
*/

Gaussian gaussianone(40.0, 225.0);

/*
TODO: Instantiate another Gaussian object called gaussiantwo. 
The object should have mean = 35.6 and variance = 12.25
*/
Gaussian gaussiantwo(35.6, 12.25);

/*
TODO:
Output to the terminal the following:
- the probability density function value for gaussianone when x = 10.5
- the probability density function value for gaussianone when x = 55.4
- the probability density function value for gaussiantwo when x = 35.6
- the probability density function value for gaussiantwo when x = 29.4
*/

std::cout << gaussianone.evaluate(10.5) << "\n";
std::cout << gaussianone.evaluate(55.4) << "\n";
std::cout << gaussiantwo.evaluate(35.6) << "\n";
std::cout << gaussiantwo.evaluate(29.4) << "\n";

/*
TODO:
- Change the mean value of gaussianone to mean = 45
- Change the variance of gaussiantwo to variance = 15.4
- Output the mean of gaussianone to the terminal
- Output the variance of gaussiantwo to the terminal
*/

gaussianone.setMu(45.0);
gaussiantwo.setSigma2(15.4);
std::cout << gaussianone.getMu() << "\n";
std::cout << gaussiantwo.getSigma2() << "\n";

/*
TODO:
- Multiply gaussian one and gaussian two. Store the resulting gaussian
in a variable called gaussianthree
- Output the mean and variance of gaussianthree to the terminal
- Add gaussian one and gaussian two. Store the resulting gaussian in a 
variable called gaussianfour
- Output the mean and variance of gaussianfour to the terminal
*/
    
Gaussian gaussianthree = gaussianone.mul(gaussiantwo);
std::cout << gaussianthree.getMu() << "\n";
std::cout << gaussianthree.getSigma2() << "\n";

Gaussian gaussianfour = gaussianone.add(gaussiantwo);
std::cout << gaussianfour.getMu() << "\n";
std::cout << gaussianfour.getSigma2() << "\n";

    
}
```

```cpp

// gaussian.cpp
#include <math.h>       /* sqrt, exp */

// class declaration
class Gaussian
{
	private:
		float mu, sigma2;

	public:
		
		// constructor functions
		Gaussian ();
		Gaussian (float, float);

		// change value of average and standard deviation 
		void setMu(float);
		void setSigma2(float);

		// output value of average and standard deviation
		float getMu();
		float getSigma2();

		// functions to evaluate 
		float evaluate (float);
		Gaussian mul (Gaussian);
		Gaussian add (Gaussian);
};


Gaussian::Gaussian() {
	mu = 0;
	sigma2 = 1;	
}

Gaussian::Gaussian (float average, float sigma) {
	mu = average;
	sigma2 = sigma;
}

void Gaussian::setMu (float average) {
	mu = average;
}

void Gaussian::setSigma2 (float sigma) {
	sigma2 = sigma;
}


float Gaussian::getMu () {
	return mu;
}

float Gaussian::getSigma2() {
	return sigma2;
}

float Gaussian::evaluate(float x) {
	float coefficient;
	float exponential;

	coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
	exponential = exp ( -0.5 * pow ((x - mu), 2) / sigma2 );
	return coefficient * exponential;
}

Gaussian Gaussian::mul(Gaussian other) {
	float denominator;
	float numerator;
	float new_mu;
	float new_var;

	denominator = sigma2 + other.getSigma2();
	numerator = mu * other.getSigma2() + other.getMu() * sigma2;
	new_mu = numerator / denominator;

	new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

	return Gaussian(new_mu, new_var);
}

Gaussian Gaussian::add(Gaussian other) {

	float new_mu;
	float new_sigma2;

	new_mu = mu + other.getMu();
	new_sigma2 = sigma2 + other.getSigma2();

	return Gaussian(new_mu, new_sigma2);
}
```

# Anatomy of a Class

If you look back at the gaussian.cpp class file, you'll notice that there were four distinct sections. The file contained:

-   a header
-   class declarations
-   constructor functions
-   and method definitions

It might help to think about these four sections as you write your own code. As a review, here is the code from each section of the gaussian.cpp file.

# Header

The  **header**  has all of the include statements.

```cpp
#include <math.h>

```

# Class Declaration

The  **class declaration**  is a lot like a variable or function declaration. In the class declaration, you let the compiler know what all of the class variables and methods look like in terms of data types, inputs and outputs.

```cpp
class Gaussian
{
    private:
        float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian multiply (Gaussian);
        Gaussian add (Gaussian);
};
```

We'll talk about the difference between public and private later in the lesson. In essence, a private function or variable is only reachable within the class code whereas a public function or definition is accessible to objects as well.

# Constructor Functions

**Constructor**  functions determine how a new object will be initiated. When you declare a new object, should the object have default values? Or will you provide values every time you instantiate an object?

Python had an equivalent syntax with the  `__init__`.

```python
def __init__(self, variable1, variable2, ..., variablen):
```

The first constructor function is for when you instantiate an object without specifying the average and variance.:

```cpp
Gaussian::Gaussian() {
    mu = 0;
    sigma2 = 1;    
}
```

The other constructor function specifies what to do when you do specify the average and variance:

```cpp
Gaussian::Gaussian (float average, float sigma) {
    mu = average;
    sigma2 = sigma;
}
```

# Class Methods

And finally, the class methods define all of the functions that your class needs to have.

The rest of the code contains the definitions for all of the functions, also called methods, that your class has.

The get and set functions are specifically for getting variable values or changing the value of private variables. Again, we'll go into more detail about private and public later in the lesson.

```cpp
void Gaussian::setMu (float average) {
    mu = average;
}

void Gaussian::setSigma2 (float sigma) {
    sigma2 = sigma;
}

float Gaussian::getMu () {
    return mu;
}

float Gaussian::getSigma2() {
    return sigma2;
}
```

The rest of the functions (evaluate, multiply, add) are the same functions that were in the Python version of the class.

```cpp
float Gaussian::evaluate(float x) {
    float coefficient;
    float exponential;

    coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
    exponential = exp ( pow (-0.5 * (x - mu), 2) / sigma2 );
    return coefficient * exponential;
}

Gaussian Gaussian::multiply(Gaussian other) {
    float denominator;
    float numerator;
    float new_mu;
    float new_var;

    denominator = sigma2 + other.getSigma2();
    numerator = mu * other.getSigma2() + other.getMu() * sigma2;
    new_mu = numerator / denominator;

    new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

    return Gaussian(new_mu, new_var);
}

Gaussian Gaussian::add(Gaussian other) {

    float new_mu;
    float new_sigma2;

    new_mu = mu + other.getMu();
    new_sigma2 = sigma2 + other.getSigma2();

    return Gaussian(new_mu, new_sigma2);
}
```

# Other Facets of C++ Classes

If you haven't taken one yet, now might be a good time to take a stretch break. We've still got three more topics to cover before you code your own class:

-   Private versus Public
-   Header Files
-   Inclusion Guards

As you'll see in the next lesson node,  **private**  variables and functions are only available within your class code.  **Public**  functions and variables, on the other hand, are accessible within your class and also by an object of the class.

You are already familiar with  **header files**  from the "C++ Getting Started" lesson. While header files are not needed to run code, they are very helpful for organizing and reusing code. We'll explain how to use header files when organizing your C++ code.

C++ compilers do not like it when your code declares the same variables, functions or classes more than once. As your code gets longer and more complex, you'll oftentimes include more than one header file at the top of your code. These header files could contain the same class or function declarations, and then your code won't compile. You'll see how to avoid this situation in the "Inclusion Guards" lesson node.

Continue on to learn about these three aspects of C++ programming.

# What do Private, Protected and Public Mean?

In the Gaussian class declaration, the  **mu**  and  **sigma2**  variables were marked as private whereas the rest of the variables and functions were in a section marked public. Here is a reminder of the class declaration:

```cpp
class Gaussian
{
    private:
        float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian multiply (Gaussian);
        Gaussian add (Gaussian);
};
```

# Private and Public

These keywords  **private**  and  **public**  determine which part of your program will have access to the variables and functions. If a variable or function is  **private**, then only the class code itself has access to these variables and functions.

On the other hand, anything marked  **public**  can be accessed outside the class; for example, when you instantiate an object, your program will be able to use the set and get functions as well as the evaluate, multiply and add functions; however, your program will not be able to access the  **mu**  and  **sigma2**  variables directly.

# Protected

There is another keyword called  **protected**, which wasn't used in the example. Basically,  **protected**  classes and variables can be accessed by any subclasses. For example, if you wrote a Vehicle class, you might write a Car class, a Van class, and a Truck class that would all inherit from the more general Vehicle class. Any protected variables in the Vehicle class could be accessed in the child classes.

# Example of Public vs. Private

Below is another example of the Gaussian class except mu and sigma2 have been made public. Notice how it is no longer necessary to have getMu, getSigma2, setMu and setSigma2 functions because the object has direct access to those variables.

```cpp

// main.cpp
#include <iostream>
#include "gaussian.h"

int main ()
{

	Gaussian mygaussian(30.0,20.0);
	Gaussian othergaussian(10.0,30.0);
	
	std::cout << "average " << mygaussian.mu << std::endl;
	
	std::cout << "evaluation " << mygaussian.evaluate(15.0) << std::endl;

	std::cout << "mul results sigma " << mygaussian.mul(othergaussian).sigma2 << std::endl;
	std::cout << "mul results average " << mygaussian.mul(othergaussian).mu << std::endl;

	std::cout << "add results sigma " << mygaussian.add(othergaussian).sigma2 << std::endl;
	std::cout << "add results average " << mygaussian.add(othergaussian).mu << std::endl;

	std::cout << "average " << mygaussian.mu << std::endl;
    mygaussian.mu = 25;
    std::cout << "average " << mygaussian.mu << std::endl;
     
	return 0;
}
```

```cpp

// gaussian.cpp
#include <math.h>       /* sqrt, exp */
#include "gaussian.h"

Gaussian::Gaussian() {
	mu = 0;
	sigma2 = 1;	
}

Gaussian::Gaussian (float average, float sigma) {
	mu = average;
	sigma2 = sigma;
}

float Gaussian::evaluate(float x) {
	float coefficient;
	float exponential;

	coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
	exponential = exp ( pow (-0.5 * (x - mu), 2) / sigma2 );
	return coefficient * exponential;
}

Gaussian Gaussian::mul(Gaussian other) {
	float denominator;
	float numerator;
	float new_mu;
	float new_var;

	denominator = sigma2 + other.sigma2;
	numerator = mu * other.sigma2 + other.mu * sigma2;
	new_mu = numerator / denominator;

	new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

	return Gaussian(new_mu, new_var);
}

Gaussian Gaussian::add(Gaussian other) {

	float new_mu;
	float new_sigma2;

	new_mu = mu + other.mu;
	new_sigma2 = sigma2 + other.sigma2;

	return Gaussian(new_mu, new_sigma2);
}
```

```cpp

// gaussian.h
class Gaussian
{

	public:

		float mu, sigma2;
		
		// constructor functions
		Gaussian ();
		Gaussian (float, float);

		// functions to evaluate 
		float evaluate (float);
		Gaussian mul (Gaussian);
		Gaussian add (Gaussian);
};
```

# Why Keep Things Private

By default, C++ makes all class variables and functions private. That means you can actually declare private variables and functions at the top of your class declaration without even labeling them  **private**:

```cpp
class Gaussian
{
    float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian mul (Gaussian);
        Gaussian add (Gaussian);
};
```

C++ thus encourages you to make everything private unless you have a good reason not to do so. For example, by making the mu and sigma2 variables private, you have separated how  **mu**  and  **sigma2**  are implemented versus how  **mu**  and  **sigma2**  are accessed.

What happens if the way your class calculates  **mu**  and  **sigma2**  changes? If these variables had been public, then any code that uses your class might break. When  **mu**  and  **sigma2**  were public, a program could directly change the value of  **mu**  and  **sigma**  with code like:

```cpp
    mygaussian.mu = 25;
```

But when  **mu**  and  **sigma2**  were private, a program had to use code like this:

```cpp
mygaussian.setMu(25)
```

If you needed to change something about the implementation of the  **mu**  variable, you would be much less likely to break existing code in the private case. A program using the Gaussian class does not need to know how  **mu**  was implemented as long as the program can get the  **mu**  value and change the value in  **mu**.

# Header Files

In the previous example, you saw how to separate a class into one file (gaussian.cpp) that was separate from main.cpp. But both the main program file and the gaussian class file needed the exact same class declaration at the top of the code:

```cpp
// class declaration
class Gaussian
{
    private:
        float mu, sigma2;

    public:

        // constructor functions
        Gaussian ();
        Gaussian (float, float);

        // change value of average and standard deviation 
        void setMu(float);
        void setSigma2(float);

        // output value of average and standard deviation
        float getMu();
        float getSigma2();

        // functions to evaluate 
        float evaluate (float);
        Gaussian mul (Gaussian);
        Gaussian add (Gaussian);
};
```

Instead of writing the entire declaration twice, a better option is to put the declaration into a header file. Then you can include the entire declaration with a single line of code:

```cpp

// main.cpp
#include <iostream>
#include "gaussian.h"

int main ()
{

	Gaussian mygaussian(30.0,20.0);
	Gaussian othergaussian(10.0,30.0);
	
	std::cout << "average " << mygaussian.getMu() << std::endl;
	std::cout << "evaluation " << mygaussian.evaluate(15.0) << std::endl;

	std::cout << "mul results sigma " << mygaussian.mul(othergaussian).getSigma2() << std::endl;
	std::cout << "mul results average " << mygaussian.mul(othergaussian).getMu() << std::endl;

	std::cout << "add results sigma " << mygaussian.add(othergaussian).getSigma2() << std::endl;
	std::cout << "add results average " << mygaussian.add(othergaussian).getMu() << std::endl;

	return 0;
}
```

```cpp
#include <math.h>       /* sqrt, exp */
#include "gaussian.h"

Gaussian::Gaussian() {
	mu = 0;
	sigma2 = 1;	
}

Gaussian::Gaussian (float average, float sigma) {
	mu = average;
	sigma2 = sigma;
}

void Gaussian::setMu (float average) {
	mu = average;
}

void Gaussian::setSigma2 (float sigma) {
	sigma2 = sigma;
}


float Gaussian::getMu () {
	return mu;
}

float Gaussian::getSigma2() {
	return sigma2;
}

float Gaussian::evaluate(float x) {
	float coefficient;
	float exponential;

	coefficient = 1.0 / sqrt (2.0 * M_PI * sigma2);
	exponential = exp ( pow (-0.5 * (x - mu), 2) / sigma2 );
	return coefficient * exponential;
}

Gaussian Gaussian::mul(Gaussian other) {
	float denominator;
	float numerator;
	float new_mu;
	float new_var;

	denominator = sigma2 + other.getSigma2();
	numerator = mu * other.getSigma2() + other.getMu() * sigma2;
	new_mu = numerator / denominator;

	new_var = 1.0 / ( (1.0 / sigma2) + (1.0 / other.sigma2) );

	return Gaussian(new_mu, new_var);
}

Gaussian Gaussian::add(Gaussian other) {

	float new_mu;
	float new_sigma2;

	new_mu = mu + other.getMu();
	new_sigma2 = sigma2 + other.getSigma2();

	return Gaussian(new_mu, new_sigma2);
}
```

```cpp

// gaussian.h
class Gaussian
{
	private:
		float mu, sigma2;

	public:
		
		// constructor functions
		Gaussian ();
		Gaussian (float, float);

		// change value of average and standard deviation 
		void setMu(float);
		void setSigma2(float);

		// output value of average and standard deviation
		float getMu();
		float getSigma2();

		// functions to evaluate 
		float evaluate (float);
		Gaussian mul (Gaussian);
		Gaussian add (Gaussian);
};
```

# What goes in a header file?

You were introduced to header files in the previous lesson. Header files allowed you to put function declarations in a separate file. Ultimately, using and including header files makes it easier to re-use functions in different parts of your program. Furthermore, if the class declaration changes, you only have to change the declaration in one place.

For classes, header files serve the exact same purpose. When you use the Gaussian class in main.cpp, you can simply include the header file at the top  `include "gaussian.h"`. That gives main.cpp access to the Gaussian class.

Likewise, for gaussian.cpp, you can include the header file as well rather than writing out the entire declaration.

# Using Include in Header Files

Generally, it's recommended to put the minimum number of #include statements needed into a header file. However, because header files essentially get copied into .cpp files, you might inadvertently include the same library or file multiple times. The consequence is that variables, functions or classes might be declared multiple times as well, and the code will not compile. In the next part of the lesson, you will learn what happens when elements get declared multiple times, and you will also learn how to avoid the multiple declarations.

# Inclusion Guards
Take a look at this main.cpp file and click the "Test Run" button. Why doesn't the code compile?

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    
    string color;
    int doors;
    
    color = "blue";
    doors = 4;
    
    string color;
    color = "red";
    
    cout << "This " << color << " car has " << doors << " doors";
    
    return 0;
    
}
```

# Declaring variables, functions or classes multiple times

C++ programs will not compile if a variable, function or class gets declared more than once. This might seem easy to avoid when the codebase is small. But imagine what happens when you have a large codebase with many different classes, .cpp files, and personnel working on different parts of the code.

Take a look at this code below. There are two different classes in two separate files. One class represents an engine with a variable storing the size of the engine. The other class represents a car, which has a color variable and a variable representing the number of doors.

But there's a catch. The car class also uses the engine class in order to store the car's engine properties. That is why the car.h header file includes the engine header file with the line:

```cpp
#include "engine.h"
```

However, the code will not compile in its current state. Think about why it does not compile correctly when you press the "Test Run" button.

As a hint, look at the include statements on the top of main.cpp. Include statements will essentially copy a file into another file. Remember that a program that defines a class more than once will not compile.

```cpp

// main.cpp
#include <iostream>
#include <string>
#include "engine.h"
#include "car.h"

using namespace std;

int main() {

	Engine enginelarge("4L");
	Engine enginesmall("2.5L");

	Car carone("red", 5);
	Car cartwo("green", 4);


	cout << "Small engine size "  << enginesmall.getSize() << endl;
	cout << "Large engine size " << enginelarge.getSize() << endl;
	cout << "Car one doors " << carone.getDoors() << endl;
	cout << "Car two doors " << cartwo.getDoors() << endl;

	cout << "Car one engine size " << carone.getEngine() << endl;
	carone.setEngine(enginelarge.getSize());
	cout << "Car one engine size new " << carone.getEngine() << endl;

	return 0;
}
```

```cpp

// engine.h
#include <string>

class Engine
{
	private:
		std::string enginesize;

	public:

		Engine ();

		Engine (std::string);

		void setSize(std::string);

		std::string getSize();

};
```

```cpp

// engine.cpp
#include "engine.h"

using namespace std;

Engine::Engine () {
	enginesize = "4L";
}

Engine::Engine (string engine) {
	enginesize = engine;
}

void Engine::setSize(string newsize) {
	enginesize = newsize;
}

string Engine::getSize() {
	return enginesize;
}
```

```cpp

// car.h
#include <string>
#include "engine.h"

class Car
{
	private:
		std::string color;
		int doors;
		Engine enginetype;

	public:
		Car (std::string, int);

		void setColor(std::string);
		void setDoors(int);
		void setEngine(std::string);

		std::string getColor();
		int getDoors();
		std::string getEngine();

};
```

```cpp

// car.cpp
#include "car.h"

using namespace std;

Car::Car (string newcolor, int newdoors) {
	color = newcolor;
	doors = newdoors;
	enginetype.setSize("2.5L");
}

string Car::getColor() {
	return color;
}

int Car::getDoors() {
	return doors;
}

string Car::getEngine() {
	return enginetype.getSize();
}

void Car::setColor(string newcolor) {
	color = newcolor;
}

void Car::setDoors(int newdoors) {
	doors = newdoors;
}

void Car::setEngine(string newengine) {
	enginetype.setSize(newengine);
}
```

The code would not compile because of these statements:

```cpp
#include "engine.h"
#include "car.h"
```

The first include statement will copy the contents of the engine header file into main.cpp. So main.cpp will have the definition of the Engine class.

But then, main.cpp will copy the contents of "car.h" as well. But the "car.h" file also includes engine.h:

```cpp
#include "engine.h"
```

The "engine.h" file ends up being included twice, so the Engine class is declared twice. The Car uses the engine class, and main.cpp also uses the engine class.

The modularity of .cpp and .h files is a big advantage of C++. But how can you avoid the multiple declarations?

# ifndef

The solution is to use  `# ifndef`  statements, which allow you to implement a technique called inclusion guards.

The ifndef statement stands for "if not defined". When you wrap your header files with #ifndef statements, the compiler will only include a header file if the file has not yet been defined. In the current main.cpp example, the "engine.h" file would be included first. Then the compiler includes "car.h". But "car.h" will try to include "engine.h" again; however, the inclusion guard in the "engine.h" file will ensure that "engine.h" does not get included again.

Here is what the "engine.h" file looks like with an ifndef statement:

```cpp
#ifndef ENGINE_H
#define ENGINE_H

#include <string>

class Engine
{
    private:
        std::string enginesize;

    public:

        Engine ();

        Engine (std::string);

        void setSize(std::string);

        std::string getSize();

};

#endif /* ENGINE_H */
```

```cpp
#ifndef FILENAME_H
#define FILENAME_H

header code ...

#endif /* FILENAME_H */
```

Using all caps with the _H is a naming convention. It is also customary to put a comment after the #endif statement with the filename.

You would want to wrap all of your header files with #ifndef statements. That way other programs do not have to keep track of what files have already been included when they want to use your code.

Here are the results of including #ifndef statements in the engine and car header files. If you click on "Test Run", you will see that the code now compiles.
 
```cpp

// main.cpp
#include <iostream>
#include <string>
#include "engine.h"
#include "car.h"

using namespace std;

int main() {

	Engine enginelarge("4L");
	Engine enginesmall("2.5L");

	Car carone("red", 5);
	Car cartwo("green", 4);


	cout << "Small engine size "  << enginesmall.getSize() << endl;
	cout << "Large engine size " << enginelarge.getSize() << endl;
	cout << "Car one doors " << carone.getDoors() << endl;
	cout << "Car two doors " << cartwo.getDoors() << endl;

	cout << "Car one engine size " << carone.getEngine() << endl;
	carone.setEngine(enginelarge.getSize());
	cout << "Car one engine size new " << carone.getEngine() << endl;

	return 0;
}
```

```cpp

// engine.h
#ifndef ENGINE_H
#define ENGINE_H

#include <string>

class Engine
{
	private:
		std::string enginesize;

	public:

		Engine ();

		Engine (std::string);

		void setSize(std::string);

		std::string getSize();

};

#endif /* ENGINE_H */
```

```cpp

// engine.cpp
#include "engine.h"

using namespace std;

Engine::Engine () {
	enginesize = "4L";
}

Engine::Engine (string engine) {
	enginesize = engine;
}

void Engine::setSize(string newsize) {
	enginesize = newsize;
}

string Engine::getSize() {
	return enginesize;
}
```

```cpp

// car.h
#ifndef CAR_H
#define CAR_H

#include <string>
#include "engine.h"

class Car
{
	private:
		std::string color;
		int doors;
		Engine enginetype;

	public:
		Car (std::string, int);

		void setColor(std::string);
		void setDoors(int);
		void setEngine(std::string);

		std::string getColor();
		int getDoors();
		std::string getEngine();

};

#endif  /* CAR_H */
```

```cpp

// car.cpp
#include "car.h"

using namespace std;

Car::Car (string newcolor, int newdoors) {
	color = newcolor;
	doors = newdoors;
	enginetype.setSize("2.5L");
}

string Car::getColor() {
	return color;
}

int Car::getDoors() {
	return doors;
}

string Car::getEngine() {
	return enginetype.getSize();
}

void Car::setColor(string newcolor) {
	color = newcolor;
}

void Car::setDoors(int newdoors) {
	doors = newdoors;
}

void Car::setEngine(string newengine) {
	enginetype.setSize(newengine);
}
```

## Namespaces in Header Files

As an aside, you'll notice that the header files did not use the standard namespace. It's generally recommended to avoid using namespaces in a header file. This can help avoid naming conflicts later as functions and classes are reused in different parts of a code base.

# Implement a Class
Now it's time to code your own class. For the remainder of this lesson, you are going to implement a matrix class much like what you did for the Python object oriented programming lesson.

At this point, we're assuming you are familiar with basic matrix operations. So the main focus of the lesson will be practicing writing C++ code. You are going to build up the class step by step starting with declaring variables and functions, writing functions, using inclusion guards and instantiating an object.

In the next part of the lesson, you'll be given certain tasks to complete. You'll also find solutions at the bottom of each page.

# Class Variables

Your first task will be to declare the variables in your Matrix class. As a reminder, here is the general syntax for declaring a C++ class:

```cpp
class Classname
{
    private:
        declare private variables;
        declare private functions;

    public:
        declare public variables;
        declare public functions;
};
```

The lines for actually declaring the variables are the same as any other C++ variable declaration:

```cpp
datatype variablename;
```

The Matrix class has three private variables:

-   grid - a 2D float vector to hold the matrix values
-   rows - the number of rows in the matrix
-   columns - the number of columns in the matrix

The rows and columns variables should be declared as a size_type. A size_type variable holds the size of a vector.

If your vector holds integers, the size_type declaration looks like this:

```cpp
std::vector<int>::size_type variablename;
```

If your vector holds floats, then the size_type declaration would look like this:

```cpp
std::vector<float>::size_type variablename;
```

The value that goes inside the brackets <> is based on whatever the original vector declaration was. A size_type variable is actually an unsigned int. The size_type variable is guaranteed to be able to hold up to the maximum size of a float vector.

Fill out the header file below with the variable declarations. This quiz is not graded, but the answer is included below.

```cpp

// matrix.h
#include <vector>

// Header file for the Matrix class

/* 
**  TODO:
**    Declare the following private variables:
**      a 2D float vector variable called grid
**      a vector size_type variable called rows
**      a vector size_type variable called cols
*/

class Matrix 
{

        private:

            std::vector< std::vector<float> > grid;
            std::vector<float>::size_type rows;
            std::vector<float>::size_type cols;    
};
```

```cpp

// main.cpp
#include <iostream>
#include <vector>
#include "matrix.h"

int main () {
    
    // TODO: Nothing to do here
    
    return 0;
}
```

```cpp

// matrix.cpp

// TODO: Nothing to do here
```

# Class Functions

To write functions in your Matrix class, you need to declare those functions first. For the Matrix class, you can think of these functions as belonging to three separate categories:

-   constructor functions
-   set and get functions
-   functions for Matrix functionality

Declaring these functions will be exactly like declaring functions in the previous lesson. The difference is that now you have to decide if a function is private, protected or public. And the function declarations go inside the class declaration.

You will define your functions in matrix.cpp. But first, let's briefly talk about each type of function. Constructor functions are for initializing objects. Python does this with the  `def __init__`  syntax. The C++ syntax is a bit different, and you will learn about the differences in the next part of the lesson.

Set and get functions are specifically for accessing and assigning values to private variables. Because an object will not have direct access to private variables, the set and get functions give indirect access. Set and get functions have the same syntax as any other C++ function. Using set and get is a convention of object oriented programming rather than a specific C++ syntax.

And finally, there are the functions that consist of the matrix functionality such as printing out the matrix, adding matrices together, multiplying matrices, etc. You will implement these functions as part of the exercises.

Go to the next part of the exercise to declare and define the Matrix constructor functions.

# Set and Get Function Declarations

Set and Get functions allow your objects to gain access to private variables. An object cannot access a private variable directly, so instead, set and get functions are used. You can see how this is done in the Gaussian object from earlier in the lesson.

Here were the declarations for the set and get functions:

```cpp
class Gaussian
{
    private:
        ...

    public:
        ...

        void setMu(float);
        void setSigma2(float);

        float getMu();
        float getSigma2();

     ....
};
```

A set function changes the value of a variable whereas a get function returns the value of a variable. You'll notice that set and get function syntax is the same as any regular function. In fact, set and get are conventions rather than specific to C++. It's traditional to name these functions getVariablename() and setVariablename() although there is no requirement to do so.

You would declare set and get functions as public so that objects could have access to these functions.

# Functions for Matrix Functionality

The third set of functions to declare are for the matrix functionality. The syntax is exactly the same as the get and set function syntax as well as any normal C++ function. You need to specify the return datatype, the function name, and the datatype for the input variables.

For example, the Gaussian class had three functions: evaluate, multiply and add. Here is how these functions were declared in the gaussian.h file:

```cpp
class Gaussian
{
    ....

    public:

       ...

        // functions to evaluate 
        float evaluate (float);
        Gaussian multiply (Gaussian);
        Gaussian add (Gaussian);
};
```

# Declaring Functions in the Matrix Class

Now it's your turn to declare functions in the matrix.h file. Fill out the TODOS in the matrix.h file below. Don't forget that every function in matrix.cpp needs to be declared in matrix.h.

The answer is underneath the code block.

```cpp

// matrix.h
#include <vector>

class Matrix 
{

        private:

            std::vector< std::vector<float> > grid;
            std::vector<float>::size_type rows;
            std::vector<float>::size_type cols;
            
        public:
        
        /* 
        ** TODO: Declare  constructor functions
        ** For the matrix class, you will need two constructor functions.
        ** 1. An empty constructor function
        ** 2. A constructor function that accepts a 2-dimensional vector
        */
        
        /*
        ** TODO: Declare set and get functions for the three private variables.
        ** You will need 1 set function and 3 get functions.
        ** The names of these functions should be setGrid, getGrid, getRows, 
        ** and getCols.
        **
        ** The setGrid does not return anything and has a 2-D vector input
        ** getGrid returns a 2-D vector and has no input
        ** getRows returns a size_type and has no input
        ** get Cols returns a size_type and has no input
        */
        
        /*
        ** TODO: Declare the matrix functions. In a following exercise, you
        ** will program matrix_transpose, matrix_addition and matrix_print
        ** functions. So you will need to declare these two functions.
        ** 
        ** matrix_transpose has no input and outputs a 2D vector
        ** matrix_addition receives a Matrix and outputs a 2D vector
        ** matrix_print has no inputs and no outputs
        */
};

// solution
#include <vector>

class Matrix 
{

        private:

            std::vector< std::vector<float> > grid;
            std::vector<float>::size_type rows;
            std::vector<float>::size_type cols;

        public:

            // constructor function declarations
            Matrix ();
            Matrix (std::vector< std::vector<float> >);

            // set and get function declarations
            void setGrid(std::vector< std::vector<float> >);

            std::vector< std::vector<float> > getGrid();
            std::vector<float>::size_type getRows();
            std::vector<float>::size_type getCols();

            // matrix function declarations
            std::vector< std::vector<float> > matrix_transpose();
            std::vector< std::vector<float> > matrix_addition(Matrix);
            void matrix_print();  
};
```

```cpp

// matrix.cpp
#include "matrix.h"

/* TODO: Define the default constructor. Remember the syntax is
**      Classname::ClassName() {
**    
**          initialize variables
**    
**       }
**
**
**      You need to initialize the grid variable to a default value such as
**      a 4x4 matrix with all zeros.
**
**      Then initialize the rows variable, and the cols variable using the
**      vector size method. For example myvector.size() will give the size of
**      a vector. For a 2-dimensional vector, myvector.size() would be the
**      number of rows in a matrix.
**
*/

/* TODO: Define a constructor that receives a 2-Dimensional vector
**       and assigns the vector to the grid variable. 
**       
**      Remember the syntax is
**      Classname::ClassName(datatype inputvariablename) {
**    
**          classvariable = inputvariablename
**    
**       }
**
**      Then initialize the rows variable, and the cols variable exactly
**      as you did for the default constructor.
**
*/
```

```cpp

// main.cpp
#include <iostream>
#include <vector>
#include "matrix.h"

int main () {
    
    // TODO: Nothing to do here
    
    return 0;
}
```

# Declaring Constructor Functions

Both Python and C++ have constructor functions. Constructor functions define what happens when you instantiate an object.

#### Python Constructor

These are the functions that define what happens when an object is instantiated. In Python, the syntax is:

```python
def __init__(self, variable1, variable2, ..., variablen):
    self.variable1 = variable1
    self.variable2 = variable2
    self.variablen = variablen
```

#### C++ Constructor Declaration

In C++, you declare a constructor like this:

```cpp
Classname (datatype variable1, datatype variable2, …, datatype variablen);
```

You can also simultaneously declare a default constructor function, which implies the function has no inputs:

```cpp
Classname ();
```

This default constructor function is used when you instantiate an object without providing values for the variables. To be more concrete, you will initialize a Matrix variable with a two-dimensional vector. If you do not provide a two-dimensional vector, you could initialize your Matrix variable with a default vector. This second case is what the empty constructor function is for.

The Gaussian constructor declarations looked like this:

```cpp
class Gaussian
{
    private:
        ...

    public:
        ...
        Gaussian ();
        Gaussian (float, float);

   ....
};
```

Whether or not you use a default constructor function will depend on your particular application and use-case. For example, if an object always has the same initial values, then it would make sense to have a default constructor function.

# Defining Constructor Functions

Once you've declared your constructor functions, you need to actually define them in a .cpp file.

The constructor function definitions have the following syntax:

```cpp
// empty constructor function syntax
Classname::ClassName() {

    constructor function definition
}

// constructor function syntax
Classname::ClassName(datatype variable1, datatype variable2, …, datatype variablen) {

    constructor function definition

}
```

You can see how this was done for the Gaussian class:

```cpp
Gaussian::Gaussian() {
    mu = 0;
    sigma2 = 1;    
}

Gaussian::Gaussian (float average, float sigma) {
    mu = average;
    sigma2 = sigma;
}
```

Note that constructor functions do not return anything. They merely initialize class variables. You might also be wondering how the function definitions can access mu and sigma2 if those were private variables. Remember that private variables can be accessed from within the class code itself but not from outside the class.

# Initializing with Default Values

In both Python and C++, you can use default values in your construction functions. In Python, the syntax is:

```python
def __init__(self, variable1 = default1, variable2 = default2, ..., variablen = defaultn):
    self.variable1 = variable1
    self.variable2 = variable2
    self.variablen = variablen
```

You can also get this functionality in C++ although the syntax might not be what you'd expect; you actually define default values in the .h file function definition. Here is a trivial example for an addition Class that holds two integers and outputs their sum.

Here is the header file add.h:

```cpp
class Add
{
    public:
        int a;
        int b;

        Add(int, int second = 17);

        int addition();
};
```

and then here are the definitions in add.cpp:

```cpp
#include  "add.h"

Add::Add(int first, int second) {

    a = first;
    b = second;
}

int Add::addition() {
    return a + b;
}
```

Notice that the default value was declared in the header file. Now, if you only specify one value when instantiating an add object, variable b will have a default value of 17:

```cpp
#include <iostream>

#include  "add.h"

int main() {

    Add adder(5);
    std::cout << adder.addition() << std::endl;
    return 0;

}
```

The above code outputs 22.

# Declare and Define Matrix Class Constructors

Now it's your turn. Fill out the TODO sections in the matrix.h and matrix.cpp files.

```cpp

// main.cpp
#include <iostream>
#include <vector>
#include "matrix.h"

int main () {
    
    // TODO: Nothing to do here
    
    return 0;
}
```

```cpp

// matrix.cpp
#include "matrix.h"

Matrix::Matrix() {
    std::vector <std:: vector <float> > initial_grid (10, std::vector <float>(5, 0.5));
    grid = initial_grid;
    rows = initial_grid.size();
    cols = initial_grid[0].size();

}

Matrix::Matrix(std::vector <std:: vector <float> > initial_grid) {
    grid = initial_grid;
    rows = initial_grid.size();
    cols = initial_grid[0].size();
}
```

```cpp

// matrix.h
#include <vector>

class Matrix 
{

        private:

            std::vector< std::vector<float> > grid;
            std::vector<float>::size_type rows;
            std::vector<float>::size_type cols;

        public:

            // constructor function declarations
            Matrix ();
            Matrix (std::vector< std::vector<float> >);
};
```

# Set and Get Function Declarations

Set and Get functions allow your objects to gain access to private variables since objects cannot access private variables directly. You can see how this is done in the Gaussian object from earlier in the lesson.

Here were the declarations for the set and get functions:

```cpp
class Gaussian
{
    private:
        ...

    public:
        ...

        void setMu(float);
        void setSigma2(float);

        float getMu();
        float getSigma2();

     ....
};
```

And here were the function definitions:

```cpp
void Gaussian::setMu (float average) {
    mu = average;
}

void Gaussian::setSigma2 (float sigma) {
    sigma2 = sigma;
}


float Gaussian::getMu () {
    return mu;
}

float Gaussian::getSigma2() {
    return sigma2;
}
```

The syntax for defining set or get functions is the same as any other class function (besides constructors):

```cpp
return datatype Classname::functionname() {
        code to define the function;
}
```

In fact, get and set functions are a convention rather than a special function with a special syntax. It's traditional to name these functions getVariablename() and setVariablename() although there is no requirement to do so.

You would declare set and get functions as public so that objects could have access to these functions.

# Matrix Class Set and Get Functions

Continue developing your Matrix class code.

-   Use a set function to be able to modify the grid variable.
-   All three private variables (grid, rows, cols) should have get functions.

Make sure to fill out the TODOs in both matrix.cpp and matrix.h

```cpp

// matrix.h
#include <vector>

class Matrix
{
    private:

        std::vector< std::vector<float> > grid;
        std::vector<float>::size_type rows;
        std::vector<float>::size_type cols;

    public:

        // constructor functions
        Matrix ();
        Matrix (std::vector< std::vector<float> >);

        // set functions
        void setGrid(std::vector< std::vector<float> >);

        // get functions
        std::vector< std::vector<float> > getGrid();
        std::vector<float>::size_type getRows();
        std::vector<float>::size_type getCols();
};
```

```cpp

// matrix.cpp
#include "matrix.h"

Matrix::Matrix() {
    std::vector <std:: vector <float> > initial_grid (10, std::vector <float>(5, 0.5));
    grid = initial_grid;
    rows = initial_grid.size();
    cols = initial_grid[0].size();

}

Matrix::Matrix(std::vector <std:: vector <float> > initial_grid) {
    grid = initial_grid;
    rows = initial_grid.size();
    cols = initial_grid[0].size();
}


void Matrix::setGrid(std::vector< std::vector<float> > new_grid) {
    grid = new_grid;
    rows = new_grid.size();
    cols = new_grid[0].size();
}

std::vector< std::vector<float> > Matrix::getGrid() {
    return grid;
}

std::vector<float>::size_type Matrix::getRows() {
    return rows;
}

std::vector<float>::size_type Matrix::getCols() {
    return cols;
}
```

