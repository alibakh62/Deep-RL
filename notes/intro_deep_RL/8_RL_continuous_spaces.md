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


