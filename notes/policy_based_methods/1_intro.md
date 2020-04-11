# Preface

#### Lesson: Introduction to Policy-Based Methods

In this lesson, you will learn about methods such as hill climbing, simulated annealing, and adaptive noise scaling. You'll also learn about cross-entropy methods and evolution strategies.

#### Lesson: Policy Gradient Methods

In this lesson, you'll study REINFORCE, along with improvements we can make to lower the variance of policy gradient algorithms.

#### Lesson: Proximal Policy Optimization

In this lesson, you'll learn about Proximal Policy Optimization (PPO), a cutting-edge policy gradient method.

#### Lesson: Actor-Critic Methods

In this lesson, you'll learn how to combine value-based and policy-based methods, bringing together the best of both worlds, to solve challenging reinforcement learning problems.

#### Lesson: Deep RL for Finance (_Optional_)

In this  **_optional_**  lesson, you'll learn how to apply deep reinforcement learning techniques for optimal execution of portfolio transactions.

#### Resources (_Optional_)

-   Read the most famous  [blog post](http://karpathy.github.io/2016/05/31/rl/)  on policy gradient methods.
-   Implement a policy gradient method to win at Pong in this  [Medium post](https://medium.com/@dhruvp/how-to-write-a-neural-network-to-play-pong-from-scratch-956b57d4f6e0).
-   Learn more about  [evolution strategies](https://blog.openai.com/evolution-strategies/)  from OpenAI.

# Introduction
In this lesson, you'll learn all about **policy-based methods**. Watch the video below to learn what policy-based methods are, and how they differ from value-based methods!

RL is uttimately about learning an optimal policy from interaction with the environment. So far, we've been looking at **value-based methods**, where we first tried to find an estimate of the optimal action value function. 

For small state spaces, this optimal value function was represented in a table with one row for each state and one column for each action. Then, we use the table to build the optimal policy one state at a time. For each state, we just pull its corresponding row from the table and the optimal action is just the action with the largest entry. 

But, **what about environments with much larger state spaces?** For instance, consider the cartpole environment, where the goal is to teach an agent to balance a pole that's attached to a moving cart. 

At each time step, the agent pushes the cart either to the left or to the right to try to keep the pole from failing down. The stated ending timestamp is a vector with four numbers containing the cart's position and velocity, along with the pole's angle and velocity. 

<p align="center">
<img src="img/cartpole1.png" alt="drawing" width="600"/>
</p>

There's a huge number of possible states corresponding to every possible value that these board numbers (picture above) can have. So, without some sort of discretization technique, **it's impossible to represent the optimal action value function in a table**. This is **because** we would need a row for each possible state, and that would make the table way too big to be useful in practice. 

So, we investigated how to represent the optimal action value function with a nerual network which formed the basis for the **deep Q learning** algorithm. In this case, neural network took the ***environment state as input***. As _**output**_, it returned the value of each possible action. 

In the case of cartpole, for instance, the possible actions are to move the cart left or right. Then, identical to the previous setting where we used the table, we can easily obtain the best action for any state by just looking at the values of the input state produces in the network. It's just the action that maximizes these values.

But the **important message** here is that in both cases, whether we used a table for small state spaces or a neural network for much larger state spaces, we had to first estimate the optimal action value function before we could tackle the optimal policy.

But now the question is: **can we directly find the optimal policy without worrying about a value function at all?** The answer is yes, and we accomplish this through a class of algorithms known as **policy-based methods**.

See the video [here](https://youtu.be/mMnhi8yzwKk).

# Policy Function Approximation
**How might we approach this idea of estimating an optimal policy?** 

Let's consider the cartpole example. In this case, the agent has two possible actions, he can push the cart either left or right. So, at each time step, the agent picks one of these two options. We can construct a neural network that approximates the policy, that accepts the state as input. As output, it can return the probability that the agent selects each possible action. So, if there are two possible actions, the output layer will have two nodes. 

The agent uses the policy to interact with the environment by just passing the most recent state to the network. It outputs action probabilities and then the agent samples from those probabilities to select an action in response. 

Our objective then is to determine appropriate values for the network weights so that for each state that we pass into the network it returns action probabilities where the optimal action is most likely to be selected. 

This will help the agent with its goal to maximize expected return. This is an iterative process where the weights are initially set to random values. Then, as the agent interacts with the environment and learns more about what strategies are best for maximizing reward, it amends those weights. As a direct result, the agent starts to choose the appropriate action for each date and it gradually masters the task. 

See the video [here](https://youtu.be/v8tGjlc2aG4).

# More on the Policy

In the previous video, you learned how the agent could use a simple neural network architecture to approximate a  **stochastic policy**. The agent passes the current environment state as input to the network, which returns action probabilities. Then, the agent samples from those probabilities to select an action.

<p align="center">
<img src="img/nn_encode_action_prob.png" alt="drawing" width="600"/>
</p>

The same neural network architecture can be used to approximate a **deterministic policy**. Instead of sampling from the action probabilities, the agent need only choose the greedy action.

## What about continuous action spaces?
The CartPole environment has a discrete action space. So, how do we use a neural network to approximate a policy, if the environment has a continuous action space?

As you learned above, in the case of  **_discrete_**  action spaces, the neural network has one node for each possible action.

For  **_continuous_**  action spaces, the neural network has one node for each action entry (or index). For example, consider the action space of the  [bipedal walker](https://github.com/openai/gym/wiki/BipedalWalker-v2)  environment, shown in the figure below.

[](https://classroom.udacity.com/nanodegrees/nd893/parts/286e7d2c-e00c-4146-a5f2-a490e0f23eda/modules/089d6d51-cae8-4d4b-84c6-9bbe58b8b869/lessons/81693145-da28-44cb-aba5-c52b42bc209d/concepts/22823289-533f-4313-ac8d-65ce86d9d090#)

![Action space of `BipedalWalker-v2`](https://video.udacity-data.com/topher/2018/July/5b3901fa_screen-shot-2018-07-01-at-11.28.57-am/screen-shot-2018-07-01-at-11.28.57-am.png)

Action space of  `BipedalWalker-v2`  ([Source](https://github.com/openai/gym/wiki/BipedalWalker-v2))

In this case, any action is a vector of four numbers, so the output layer of the policy network will have four nodes.

Since every entry in the action must be a number between -1 and 1, we will add a  [tanh activation function](https://pytorch.org/docs/stable/nn.html#torch.nn.Tanh)  to the output layer.

As another example, consider the  [continuous mountain car](https://github.com/openai/gym/wiki/MountainCarContinuous-v0)  benchmark. The action space is shown in the figure below. Note that for this environment, the action must be a value between -1 and 1.

[](https://classroom.udacity.com/nanodegrees/nd893/parts/286e7d2c-e00c-4146-a5f2-a490e0f23eda/modules/089d6d51-cae8-4d4b-84c6-9bbe58b8b869/lessons/81693145-da28-44cb-aba5-c52b42bc209d/concepts/22823289-533f-4313-ac8d-65ce86d9d090#)

![Action space of `MountainCarContinuous-v0`](https://video.udacity-data.com/topher/2018/July/5b38ff31_screen-shot-2018-07-01-at-11.19.22-am/screen-shot-2018-07-01-at-11.19.22-am.png)

Action space of  `MountainCarContinuous-v0`  ([Source](https://github.com/openai/gym/wiki/MountainCarContinuous-v0))

# Hill Climbing
So far, you've learned how to represent a policy as neural network. This network takes the current environment state as input, then if the environment has a discrete action space it outputs the action probabilities that the agent uses to select its next action.

Here, we'll describe an algorithm that the agent can use to gradually improve the network weights. So, remember that the agent's goal is always to maximize expected return. Let's denote the expected return by ![](https://latex.codecogs.com/png.latex?J).

We'll refer to the set of weights in the neural network as ![](https://latex.codecogs.com/png.latex?%5Ctheta), there is some mathematical relationship between ![](https://latex.codecogs.com/png.latex?%5Ctheta) and the expected return ![](https://latex.codecogs.com/png.latex?J). This is because ![](https://latex.codecogs.com/png.latex?%5Ctheta) encodes the policy which makes some actions more likely than others, and then depending on the action the influences the reward and then we sum up the rewards to get the return. 

Actually, it sounds potentially quite complicated. But **the main idea** is that it's possible to write the expected return ![](https://latex.codecogs.com/png.latex?J) as a function of ![](https://latex.codecogs.com/png.latex?%5Ctheta) and that function looks like this:

<p align="center">
<img src="img/hill1.png" alt="drawing" width="600"/>
</p>

Now, this equation shouldn't make any sense to you yet, but we'll come back to it later on. For now, just know that it exists, and our goal is to find the values for ![](https://latex.codecogs.com/png.latex?%5Ctheta), or the values for the weights that maximizes ![](https://latex.codecogs.com/png.latex?J). 

To understand this better, let's draw a picture. Consider a case that the neural network has only two weights: ![](https://latex.codecogs.com/png.latex?%28%5Ctheta_0%2C%20%5Ctheta_1%29). Then, we can plot the expected return ![](https://latex.codecogs.com/png.latex?J) as a function of the values of both of the weights, for each weight gets a different axis, and once we have that function we can use it to find the value of ![](https://latex.codecogs.com/png.latex?%5Ctheta) or the values of both of the weights that maximizes expected return. 

Maybe, you're familiar with one algorithm that could be useful for this called **gradient ascent**. 

<p align="center">
<img src="img/hill2.png" alt="drawing" width="600"/>
</p>

**Gradient ascent** begins with an initial guess for the value of ![](https://latex.codecogs.com/png.latex?%5Ctheta) that maximizes the function, then we evaluate the gradient at that point (gredient points to the steepest direction in a function), and so we can make a small step in that direction, in the hope that we end up at a new value of ![](https://latex.codecogs.com/png.latex?%5Ctheta) or the value of the function is a little bit larger. Then, we repeat with evaluating the gradient and taking a step until we eventually reach the maximum of the function.

Now, in order to do this, we have to take the gradient of the function. We'll discuss this later. For now, we'll discuss a different algorithm called **Hill Climbing**, that's a little bit simpler.

As with gradient ascent, we begin with an initially random set of weights ![](https://latex.codecogs.com/png.latex?%5Ctheta). We collect a single episode with the policy that corresponds to those weights and then record the return. This return is an estimation of what the surface looks like at that value of ![](https://latex.codecogs.com/png.latex?%5Ctheta). 

Now, it's not going to be perfect estimate because the return we just collected is unlikely to be equal to the expected return, but in practice the estimates often turns out to be good enough. Then, we'll add a little bit of random noise to those weights to give us another set of candidate weights we can try.

To see how good those new weights are, we'll use the policy that they give us to again interact with the environment for an episode and add up the return. If the new weights give us more return than our current best estimate, we focus our attention  on that new value, and then we just repeat by iteratively proposing new policies in the hope that they outperform the existing policy. 

In the event that they don't, we just go back to our last best guess for the optimal policy and iterate until we end up with the optimal policy. 

See the video [here](https://youtu.be/5E86a0OyVyI).

## Gradient Ascent

**Gradient ascent**  is similar to gradient descent.

-   Gradient descent steps in the  **_direction opposite the gradient_**, since it wants to minimize a function.
-   Gradient ascent is otherwise identical, except we step in the  **_direction of the gradient_**, to reach the maximum.

While we won't cover gradient-based methods in this lesson, you'll explore them later in the course!

## Local Minima
In the video above, you learned that  **hill climbing**  is a relatively simple algorithm that the agent can use to gradually improve the weights  \thetaθ  in its policy network while interacting with the environment.

Note, however, that it's  **_not_**  guaranteed to always yield the weights of the optimal policy. This is because we can easily get stuck in a local maximum. In this lesson, you'll learn about some policy-based methods that are less prone to this.

## Additional Note
Note that  [hill climbing](https://en.wikipedia.org/wiki/Hill_climbing)  is not just for reinforcement learning! It is a general optimization method that is used to find the maximum of a function.

# Hill Climbing Pseudocode
Now that we have a mental picture of how the hill climbing algorithm should work, we're ready to dig into the pseudocode. 

- We begin with an initially random set of weights ![](https://latex.codecogs.com/png.latex?%5Ctheta). 
- We'll collect an episode with the policy that correspond to those weights, and then record the return ![](https://latex.codecogs.com/png.latex?G).
- At the start, this value ![](https://latex.codecogs.com/png.latex?%5Ctheta) is our first best guess for the weights, which we'll record as ![](https://latex.codecogs.com/png.latex?%5Ctheta_%7Bbest%7D). We'll also record the return as the highest return we've gotten so far, ![](https://latex.codecogs.com/png.latex?G_%7Bbest%7D).
- Then, we add a little bit of random noise to these weights to give us another set of candidate weights we can try out. Let's call them ![](https://latex.codecogs.com/png.latex?%5Ctheta_%7Bnew%7D). 
- To see how good those new weights are, we'll use the policy that they give us to interact with the environment, then we calculate the return we got which we refer to as![](https://latex.codecogs.com/png.latex?G_%7Bnew%7D).  
- If the new weights give us more return than our current best estimate ,![](https://latex.codecogs.com/png.latex?G_%7Bnew%7D%20%3E%20G_%7Bbest%7D), we update the best weights to that new value, ![](https://latex.codecogs.com/png.latex?%5Ctheta_%7Bbest%7D%20%5Cleftarrow%20%5Ctheta_%7Bnew%7D).
- Then, we just repeat these steps until we solve the environment. That's it!

See the video [here](https://youtu.be/0XzzqIXyax0).

<p align="center">
<img src="img/hill3.png" alt="drawing" width="600"/>
</p>

## What's the difference between _G_ and _J_?
You might be wondering: what's the difference between the return that the agent collects in a single episode (![](https://latex.codecogs.com/png.latex?G),  _from the pseudocode above_) and the expected return ![](https://latex.codecogs.com/png.latex?J)?

Well ... in reinforcement learning, the goal of the agent is to find the value of the policy network weights ![](https://latex.codecogs.com/png.latex?%5Ctheta) that maximizes **_expected_** return, which we have denoted by ![](https://latex.codecogs.com/png.latex?J).

In the hill climbing algorithm, the values of ![](https://latex.codecogs.com/png.latex?%5Ctheta) are evaluated according to how much return ![](https://latex.codecogs.com/png.latex?G) they collected in a **_single episode_**. To see that this might be a little bit strange, note that due to randomness in the environment (and the policy, if it is stochastic), it is highly likely that if we collect a second episode with the same values for ![](https://latex.codecogs.com/png.latex?%5Ctheta), we'll likely get a different value for the return ![](https://latex.codecogs.com/png.latex?G). Because of this, the (sampled) return ![](https://latex.codecogs.com/png.latex?G) is not a perfect estimate for the expected return ![](https://latex.codecogs.com/png.latex?J), but it often turns out to be **_good enough_** in practice.

# Beyond Hill Climbing

In the previous section, you learned about the hill climbing algorithm.

We denoted the expected return by ![](https://latex.codecogs.com/png.latex?J). Likewise, we used ![](https://latex.codecogs.com/png.latex?%5Ctheta) to refer to the weights in the policy network. Then, since ![](https://latex.codecogs.com/png.latex?%5Ctheta) encodes the policy, which influences how much reward the agent will likely receive, we know that ![](https://latex.codecogs.com/png.latex?J) is a function of ![](https://latex.codecogs.com/png.latex?%5Ctheta).

Despite the fact that we have no idea what that function ![](https://latex.codecogs.com/png.latex?J%20%3D%20J%28%5Ctheta%29) looks like, the _hill climbing_ algorithm helps us determine the value of ![](https://latex.codecogs.com/png.latex?%5Ctheta) that maximizes it. Watch the video below to learn about some improvements you can make to the hill climbing algorithm!

**Note:** We refer to the general class of approaches that find ![](https://latex.codecogs.com/png.latex?%5Ctextup%7Bargmax%7D_%7B%5Ctheta%7D%20J%28%5Ctheta%29) through randomly perturbing the most recent best estimate as **stochastic policy search**. Likewise, we can refer to ![](https://latex.codecogs.com/png.latex?J) as an  **objective function**, which just refers to the fact that we'd like to _maximize_ it!

With an objective function in hand, we can now think about finding a policy that maximizes it. An objective function can be quite complex. Think of it as a surface with many peaks and valleys. 

Here, it's a function of two parameters with the height indicating the policy's objective value ![](https://latex.codecogs.com/png.latex?J%28%5Ctheta%29). But the same idea extends to more than two parameters. 

Now, we don't know anything about this surface. So, **how do we find the spot where the objective value is at its maximum?** 

Our first approach is to search for the best policy by repeatedly nudging it around. Let's start with some arbitrary policy ![](https://latex.codecogs.com/png.latex?%5Cpi), defined by its parameters ![](https://latex.codecogs.com/png.latex?%5Ctheta), and evaluate it by applying that policy in the environment. This gives us an objective value. So you can imagine the policy lying somewhere on the objective function surface. 

Now, we can change the policy parameters slightly so that the objective value also changes. This can be achieved by adding some small **Guassian noise** to the parameters. 

If the new policies value is better than our best value so far, we can set this policy to be our bew best policy and iterate. 

This general approach is known as **hill climbing**. You literally walk the objective function surface till you reach the top of a hill. 

_**The best part is that you can use any policy function. It does not need to be differentiable or even continuous, but because you're taking random steps, this may not result in the most eficient path up the hill.**_

