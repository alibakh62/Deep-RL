# Review
Let's recall the problem at hand. We have an agent and environment. Time is broken into discrete time steps, and at every time step, the agent receives a reward and state from the environment, and chooses an action to perform in response. In this way, the interaction involved is a sequence of states, actions, and rewards. 

In this lesson, we'll confine our attention to episodic tasks where the interaction stops at some time step, ![](https://latex.codecogs.com/gif.latex?T), when the agent encounters a terminal state. We refer to the sequence as an **episode**. For any episode, the agent's goal is to find the optimal policy in order to maximize expected cumulative reward. The agent can only accomplish this by interacting with the environment. 

In this lesson, we'll dig deeply into a class of algorithms that help the agent to understand and leverage this interaction to obtain the optimal policy. 

See the video [here](https://youtu.be/3H5x0lstvmo).

## Review Your Notes
----------
In the lesson  **The RL Framework: The Problem**, you learned how to take a real-world problem and specify it in the language of reinforcement learning. In order to rigorously define a reinforcement learning task, we generally use a  **Markov Decision Process (MDP)**  to model the environment. The MDP specifies the rules that the environment uses to respond to the agent's actions, including how much reward to give to the agent in response to its behavior. The agent's goal is to learn how to play by the rules of the environment, in order to maximize reward.

<p align="center">
<img src="img/review1.png" alt="drawing" width="400"/>
</p>

Next, in the lesson **The RL Framework: The Solution**, you learned how to specify a solution to the reinforcement learning problem. In particular, the **optimal policy** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast) specifies - for each environment state - how the agent should select an action towards its goal of maximizing reward. You learned that the agent could structure its search for an optimal policy by first estimating the **optimal action-value function** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20q_%5Cast); then, once ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20q_%5Cast) is known, ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast) is quickly obtained.

<p align="center">
<img src="img/review2.png" alt="drawing" width="400"/>
</p>

Before continuing with this lesson, please take the time to review your notes, to ensure that the terminology from the previous two lessons is familiar to you. In particular, you should peruse the summary page at the end of the lesson **The RL Framework: The Problem**, and the page at the end of **The RL Framework: The Solution** to ensure that the listed concepts are familiar.

# Gridworld Example
To illustrate the algorithms we'll discuss in this lesson, it'll help if we work with a simple RL task. Say, we have an agent in a world with only four possible states (stone (1), brick (2), wood (3), grass (4)). Say, that at the beginning of an episode, the agent always starts in state (1) and its goal is to reach state (4), which is a terminal state. To add a bit of difficulty, we add a wall separating state (1) from (4). At each time step, the agent can move up, down, left, or right. Let's also say that there is some uncertainty with the movement. Say if the agent decides to move in some direction, it moves in that direction with some _probability_, and ends up in other directions with some other probabilities. And if an agent runs into a wall, it just ends up in the same state where it started. The agent gets the reward of -1 for most of the states, but it lands in state (4), it'll get a reward a of 10. This is to ensure that the goal of the agent is to get to the terminal state as quickly as possible. For simplicity, let's say that the discount rate is 1 (so, basically no discount).   

<p align="center">
<img src="img/gridex1.png" alt="drawing" width="300"/>
</p>

See the video [here](https://youtu.be/Lwibg_IfmrA).

# Monte Carlo Methods
So, following the gridworld example, **how should the agent begin if it initially knows nothing about the environment?**

Probably, the most sensible thing for the agent to do at the beginning when it doesn't know anything is just to behave *randomly* and see what happens.

Let's say when the agent enconuters a new state, it just selects either of four directions with equal probability. _When the agent randomly selects an action in this way, where each action has an equal chance of being selected, we say that it's following the **equiprobable random policy**_.

When the agent starts moving randomly and after some episodes, it has collected some information which is valuable. **How can the agent use it to improve its strategy?**

Remember what we were searching for: **the optimal policy** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast). It tells us for each state which action or actions are most useful towards the goal of maximizing return. So, the question is very simple: **from each state which action is best?** 

Maybe, it makes sense to just pick the action that got the most reward in these episodes that it collected so far. For instance, if in one episode, first action was "up" the final score end up +7, and if "right" the score ends up being +6, then action "up" might be better than action "right" when it's in state one. _This is a useful first step for thinking about how we might be able to estimate the optimal policy from interacting with the environment_. 

It should be noted that to infer any reliable policy, we need to collect hundreds or thousands of episodes for instance. **In fact, this is a fundamental idea behind Monte Carlo methids in general**. Even though the underlying problem involves a great degree of randomness, we can infer information that we can trust, just by collecting a lot of samples. 

See the video [here](https://youtu.be/titaMCRl224).

# MC Prediction, Part 1
Following the gridworld example from previous section, we assumed that the agent used the equiprobable random policy to interact with the environment. The agent collected two episodes, and now the question is: **how exactly should the agent consolidate this information towards its goal of obtaining the optimal policy?**

The real question that we want to ask is: **For each state, which action is the best?**

See the explanation in [this video](https://youtu.be/6ts9gdIS6vg).

<p align="center">
<img src="img/mcpredict2.png" alt="drawing" width="600"/>
</p>

**NOTE:** In summary, the idea is that you'd create a matrix of states vs. actions and fill out the cells based on the score you get choosing the action in a state (if there's more than one instance, just take the average). With limited episodes of this example, it wouldn't give the optimal policy, but it's better than random.

<p align="center">
<img src="img/mcpredict1.png" alt="drawing" width="600"/>
</p>

<p align="center">
<img src="img/mcpredict3.png" alt="drawing" width="600"/>
</p>

## Important Note
----------
In this video, we demonstrated a toy example where the agent collected two episodes, consolidated the information in a table, and then used the table to come up with a better policy. However, as discussed in the previous video, in real-world settings (_and even for the toy example depicted here!_), the agent will want to collect many more episodes, so that it can better trust the information stored in the table. In this video, we use two episodes only to simplify the example.

# MC Prediction, Part 2
So far, we've informally discussed how we might take a bad policy like the equiprobable random policy, use it to collect some episodes and then use those episodes to come up with a better policy. 

Central to this idea, we build a table that stores the return obtained from visiting each state action pair and then this table can be used to obtain a policy that's better than the one we started with.

In practice, this table is an estimate for how much return is likely to follow if the agent starts in a state, selects an action and then the policy to select all future actions. 
