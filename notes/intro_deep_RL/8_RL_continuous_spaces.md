# Introduction
In this lesson, you'll learn how to adapt traditional reinforcement learning methods to solve a larger class of problems.

So far in this nanodegree, you have worked with reinforcement learning environments where the number of states and actions is limited. With small, finite  **Markov Decision Processes (MDPs)**, it is possible to represent the action-value function with a table, dictionary, or other finite structure.

For instance, consider the very small gridworld below. Say the world has four possible states, and the agent has four possible actions at its disposal (up, down, left, right). You learned in the previous lessons that we can represent the estimated optimal action-value function in a table, with a row for each state and a column for each action. We refer to this table as a  **Q-table**.

<p align="center">
<img src="img/qtable.png" alt="drawing" width="400"/>
</p>

But what about MDPs with much larger spaces? Consider that the Q-table must have a  **row for each state**. So, for instance, if there are 10 million possible states, the Q-table must have 10 million rows. Furthermore, if the state space is the set of continuous  [real-valued numbers](https://en.wikipedia.org/wiki/Real_number)  (an  **_infinite_**  set!), it becomes impossible to represent the action values in a  **_finite_**  structure!

In this lesson, I'll teach you how to generalize the tabular solution methods from the previous lessons to work with large and continuous spaces. This will lay the foundation for developing the deep reinforcement learning algorithms that you will explore later in the nanodegree.

These algorithms can be hard to understand, so don’t worry if you find them challenging at first. Make sure you practice implementing the core components of these algorithms, and apply them to various environments, to observe how they perform – that is the only way to master deep reinforcement learning!

# Brief Overview of RL framework
RL problems are typically framed as **Markov Decision Processes (MDPs)**. An MDP consists of a set of states **S** and actions **A** along with probabilities **P**, rewards **R**, and a discount factor ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cgamma). 

<p align="center">
<img src="img/overview1.png" alt="drawing" width="500"/>
</p>

- **P** captures how frequently different transitions and rewards occur, often modeled as a single joint probability where the state and reward at any time step `t+1` depend only state and action at previous time step `t`. This characteristics of certain environments is known as the **Markov property**. 

There are two quantities that we are typically interested in. 

- The value of a state **V(S)**, which we try to estimate or predict. 
- The value of an action taken in a certain state, **Q(S,A)**, which can help us decide what action to take. 

These two mappings (functions) are very inter-related and help us find an optimal policy for our problem **`π∗​`** that maximizes the total reward received. 

Note that since MDPs are probabilistic in nature, we can't predict with complete certainty what future rewards we will get and for how long. So, we typically aim for **expected reward**. This is where the discount factor comes into play as well. It is used to assign a lower weight to future rewards when computing state and action values. 

<p align="center">
<img src="img/overview2.png" alt="drawing" width="600"/>
</p>

RL algorithms are generally classified into two groups:

- **Model-based approaches (Dynamic programming):**, such as **Policy iteration**, **Value iteration**, which require a known transition and reward model.They essentially apply _dynamic programming_ to iteratively compute the desired value functions and optimal policies using that model. 
- **Model-free approaches:** including **Monte Carlo methods**, and **Temporal difference learning** don't require an explicit model. They sample the environment by carrying out exploratory actions and use the experience gained to directly estimate value functions. 

## Deep RL
Deep RL is a relatively recent term that refers to approaches that use deep learning, mainly, **Multi-layer NNs** to solve RL problems. RL is typically characterized by finite MDPs, where the number of states and actions is limited. But there are so many problems where the space of states and actions is very large or even made of continuous real value numbers. 

Traditional algorithms use a table or a dictionary or other finite structures to capture state and action values. They no longer work for such problems. 

So, the first thing you'll learn in this lesson is how to generalize these algorithms to work with large and continuous spaces. That lays the foundation for developing **deep RL algorithms** including **value-based techniques** like **Deep Q-Learning**, and those that directly try to optimize the policy, such as **Policy Gradients**. Finally, you'll look at more advanced approaches that try to combine the best of both worlds, **Actor-Critic Methods**. 

See the video [here](https://youtu.be/GPjK124RU5g).

# Discrete vs Continuous Spaces
Recall the definition of the MDP where we assume that the environment state at any time is drawn from a set of possible states. When this set is **finite**, we can call it a **discrete state space**. Similarly with actions. 

Having discrete spaces simplifies things for us. It allows us to represent any function of states and actions as a dictionary or look up table. 

Consider the state value function **V** which is a mapping from the set of states to a real number. If you encode states as integers, you can code up the value function as a dictionary using each state as a key. Similarly, consider the action value function **Q** that maps every state action pair to a real number. Again, you could use a dictionary or store the value function as a table or matrix, where each row corresponds to a state, and each column to an action.

Discrete spaces are also critical to a number of RL algorithms. For instance, in value iteration, the internal for-loop goes over each state as one by one, and updates the corresponding value estimate **V(s)**. This is impossible if you have an infinite state space. The loop would go on forever. Even for discrete state spaces with a lot of states this can quickly become infeasible.

<p align="center">
<img src="img/disc-vs-cont1.png" alt="drawing" width="700"/>
</p>

_Model-free methods_ like Q-learning assume discrete spaces as well. Here, the "max" is being computed over all possible actions from state **S'** which is easy when you have a finite set of actions. But, this tiny step by itself becomes a full-blown optimization problem if your action space is continuous.

<p align="center">
<img src="img/disc-vs-cont2.png" alt="drawing" width="700"/>
</p>

**So, what do we exactly mean by continuous space?** 

The term continuous is used to contrast with discrete, that is a continuous space is not restricted to a set of distinct values like integers. Instead, it can take a range of values, typically real numbers. This means quantities like state values that could be depicted as say a bar chart for discrete case, will now need to be thought of as a density plot over a desired range. 

The same notion extends to environments where the state is no longer a single real valued number but a _**vector**_ of such numbers. **This is still referred to as a continuous space just with more than one dimension**. 

## Why Continuous?
Let's try to build some intuition for why continuous state spaces are important. Where do they even come from?

When you consider a high-level decision making task like playing chess, you can often think of the set of possible states as discrete. What piece is in which square on the board? You don't need to bother with precisely where each piece is located within its squares or which way it is facing. These are non-relevant details for the problem at hand and you can abstract then away in your model of the game. 

In general, grid-based worlds are very popular in RL. They give a glimpse at how agents might act in spatial environment. But, real physical spaces are not always neatly divided up into grids. There is no cell (5,3) for vacuum cleaner to go to. It has to chart a course from its current position to say (2.5, 1.8). It also has to keep track of its heading and turn smoothly to face the direction it wants to move in. These are all real numbers that the agent may need to process and represent as part of the state. 

Actions too can be continuous. Take for example a robot that plays darts. It has to set the height and angle it wants to release the dart at, choose an appropriate level of power with which to throw, etc. Even small differences in these values can have a large impact on where the dart ultimately lands on the board. In general, most actions that need to take place in a physical environment are continuous in nature. 

Clearly, we need to modify our representation or algorithms or both to accomodate continuous spaces. The two main strategies we'll be looking at are: **Discretization** and **Function Approximation**. 

See the video [here](https://youtu.be/uHstLeRzaE8).

# Discretization
As the name suggests, discretization is basically converting a continuous space into a discrete one. 

Remember our continuous vacuum cleaner world. All we're saying is let's bring back a grid structure with discrete positions identified. Note that we're not really forcing our agent to be in exactly the center of these positions, since the underlying world is continuous, and we don't have control over that. 

But in our representation of the state space, we only identify certain positions as relevant. For instance, whether the robot is at (3.1, 2.4) or (2.9,1.8), we can round that off to (3,2). 

Yes, this will almost always be a little incorrect, but for some environments, discretizing the state space can work out very well. It enables us to use existing algorithms with little, or no modification.

Actions can be discretized as well. For example, angles can be divided into whole degrees, or even 90 degrees increments, if appropriate. 

Now, let's imagine there are objects in this discretized world, obstacles that the robot may need to avoid. With our grid representation, all we can do is mark off the cells where an object is present, even by a little. This is known as an **occupancy grid**. 

But our choice of discretization may lead the agent into thinking, there is no path across these obstacles to reach some desired locations. Instead, if we vary the grid according to these obstacles, then we could open up a feasible path for the agent. 

An alternate approach would be to divide up the grid into smaller cells where required. It would still be an approximation, but it'll allow us to allocate more of our state representation to where it matters. Better than dividing the entire state space into finer cells, which may increase the total number of states, and in turn, the time needed to compute value functions. If you're familiar with **binary space partitioning** or **quad trees**, this is exactly the same idea. 

Now you might be wondering: this sort of discretization makes sense in spatial domains like gridworlds, but **what about other state spaces?**

Let's look at a different domain.

Most cars these days have automatic transmission. **Have you ever wondered how the car decides to pick what gear to switch to, and when?** Here is a simplified plot of how fuel consumption varies with speed for different gears in a typical car.

<p align="center">
<img src="img/disc1.png" alt="drawing" width="400"/>
</p>

Let's assume that our state only consists of the vehicle speed, and which gear we are in. And our reward is inversely proportional to fuel consumption. The actions available to our agent are essentially switching up, or down. 

Now, although speed is a continuous value, it can be discretize into ranges, such that a single gear is the most optimal in each range. Note that these ranges can be of different lengths, that is, the discretization is non-uniform. It there were other dimensions to the state-space such as throttle position, then they could be subdivided non-uniformly as well. 

<p align="center">
<img src="img/disc2.png" alt="drawing" width="400"/>
</p>

# Exercise: Discretization
Refer to [Discretization_Solution](codes/Discretization_Solution.ipynb) notebook.

# Tile Coding
If you have prior knowledge about the state space, you can manually design an appropriate discretization scheme. 

Like in our gear switching example, we knew the relationship between fuel consumption and speed. But, in order to function in arbitrary environments, we need a more generic method. 

One elegant approach for this is **Tile Coding**. Here, the underlying state space is continuous and two-dimensional. We overlay multiple grids or tilings on top of the space, each slightly offset from each other. 

Now, any position `S` in the state space can be coarsely identified by the tiles that it activates. If we assign a bit to each tile, then we can represent our new discretized state as a bit vector, with ones for the tiles that get activated, and zeros elsewhere. 

<p align="center">
<img src="img/tile1.png" alt="drawing" width="600"/>
</p>

This, by itself, is a very efficient representation. But the genius lies in how the state value function is computed using the scheme. Instead of storing a separate value for each state `V(s)`, it is defined in terms of the bit vector for that state and a weight for each tile. 

The tile coding algorithm in turn updates these weights iteratively. This ensures nearby locations that share tiles also share some component of state value, effectively smoothing the learned value function. 

<p align="center">
<img src="img/tile2.png" alt="drawing" width="700"/>
</p>

Tile coding does have some **drawbacks**. Just like a simple grid-based approach we have to manually select the tile sizes, their offsets, number of tilings, etc. ahead of time. 

A more flexible approach is **adaptive tile coding**, which starts with fairly large tiles and divides each tile into two, whenever appropriate. **How do we know when to split?**

We can use a heuristic for that. Basically, we want to split the state space when we realize that we are no longer learning much with the current representation. That is, when our value function isn't changing. We can stop when we have reached some upper limit on the number of splits, or some max iterations.

<p align="center">
<img src="img/tile3.png" alt="drawing" width="500"/>
</p>

In order to figure out which tile to split, we have to look at which one is likely to have the greatest effect on the value function. For this, we need to keep track of subtiles and their projected weights. Then, we can pick the tile with the greatest difference between subtile weights. 

There are many other hueristics you can use, but the main advantage of _adaptive tile coding_ is that it does not rely on a human to specify a discretization ahead of time. The resulting state space is appropriately partitioned based on its complexity. 

See the video [here](https://youtu.be/BRs7AnTZ_8k).

# Coarse Coding
**Coarse Coding** is just like _tile coding_, but uses a sparser set of features to encode the state space. Imagine dropping a bunch of circles on your 2D continuous state space. Take any state `S` which is a position in this space, and mark all the circles that is belongs to. Prepare a bit vector with a one for those circles and zeros for the rest. And that's your **sparse coding representation** of the state. 

<p align="center">
<img src="img/coarse1.png" alt="drawing" width="500"/>
</p>

Looking at a 2D space helps us visualize the basic idea. But it also extends to higher dimensions where circles become spheres and hyper spheres. 

There are some neat properties of coarse coding. Using smaller circles results in less generalization across the space. The learning algorithm has to work a bit longer, but you have greater effective resolution. Larger circles lead to more generalization, and in general a smoother value function. You can use fewer large circles to cover the space, thus reducing your representation, but you would lose some resolution. 

<p align="center">
<img src="img/coarse2.png" alt="drawing" width="500"/>
</p>

It's not just the size of these circles that we can vary. We can change them in other ways like making them taller or wider to get more resolution along one dimension versus the other. In fact, this same technique generalizes to pretty much any shape. 

<p align="center">
<img src="img/coarse3.png" alt="drawing" width="500"/>
</p>

In coarse coding, just like in tile coding, are resulting state representation is a binary vector. Think of each tile or circle as a feature, 1, if it is an active, 0 if it is not. 

A natural extension to this idea is to use the distance from the center of each circle as a measure of how active that feature is. This measure/response can be made to fall off smoothly using a Gaussian or a bell-shaped curve centered on the circle, which is known as a **radial basis function**. 

<p align="center">
<img src="img/coarse4.png" alt="drawing" width="700"/>
</p>

Of course, the resulting feature values will no longer be discrete. So, we'll end up with yet another continuous state vector. But what is cool is that the number of features can be drastically reduced this way. 

See the video [here](https://youtu.be/Uu1J5KLAfTU).

