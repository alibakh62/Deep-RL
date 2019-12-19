# Introduction
This lesson covers material in **Chapter 3** (especially 3.1-3.3) of the [textbook](http://go.udacity.com/rl-textbook).

# The Setting, Revisited
Remember the agent example (puppy example) from previous lesson? He set the stage as an agent who learns from trial and error and how to behave in an environment to maximize reward.

**What do we mean when we talk about RL in general?** 

Sort of the same thing described in the puppy example. In particular, the RL framework is characterized by an **agent learned to interact with its environment**. 

- We assume that time evolves in discrete time steps. At the initial time step, the agent observes the environment. You can think of this observation as a situation that the environment presents to the agent. 
- Then, it must select an appropriate action in response. Then, at the next time step in response to the agent's action, the environment presents a new situation to the agent.
- At the same time, the environment gives the agent a reward which provides some indication of whether the agent has responded appropriately to the environment. 
- Then, the process continues where at each time step, the environment sends the agent an observation and reward.
- And, in response, the agent must choose an action. 

In general, we **don't need assume** that the environment shows the agent everything he needs to make well-informed decisions. But, it **greatly simplifies** the underlying mathematics if we do. **So, in this course, we'll make the assumption that the agent is able to fully observe whatever state the environment is in**. 

And instead of referring to the agent as receiving an observation, we'll henceforth say that it receives the **environment state**.

Let's make this description a bit clearer with some added notation. 

- The agent first receives the **environment's initial state** which we denote by `S_0`, where `0` refers to time step zero. 
- Then, based on that observation the agent chooses an **action**, `A_0`.
- At the next time step, as direct consequence of agent's action and environment previous state, the **environment transitions to a new state**, `S_1`, and gives some **reward**, `R_1`, to the agent.
- The agent then chooses an action, `A_1`. 
- At time step 2, the process continues where the environment passes the reward and state and then the agent responds with an action and so on. 

Whereas the agent interacts with the environment, this interaction is manifested as a sequence of states, actions, and rewards.

```
S_0, A_0, R_1, S_1, A_1, R_2, S_2, A_2, ...
```

The reward will always be the most relevant quantity to the agent, meaning that **any agent has the goal to maximize expected cumulative reward** or the some of the rewards attained over all time steps. 

In other words, it seeks to find an strategy for choosing actions where the cumulative reward is likely to be quite high. The agent can only accomplish this by interacting with the environment. This is because at every time step, the environment decides how much reward the agent receives. In other words, the agent must play by the rules of the environment. But through interaction, the agent can learn those rules and choose appropriate actions to accomplish its goal. This is essentially what we're trying to accomplish in this course.

See the video [here](https://youtu.be/V6Q1uF8a6kA).

# Episodic vs. Continuing Tasks
Many of the real-world situations we'll consider will have a well-defined ending point. For instance, say, we're teaching an agent to play a game. Then, the interaction ends when the agent wins or loses. Or we might be running a simulation to teach a car to drive. Then, the interaction ends when the car crashes.

## Episodic Tasks
Of course, not all RL tasks have a well-defined ending point but those that do are called **episodic tasks**, meaning that the interaction ends at some time step. In this case, we'll refer to a complete sequence of interaction from start to finish as an **episode**. 

**When the episode ends**, the agent looks at the total amount of reward it received to figure out how well it did. It's then able to start from scratch as if it has been completely reborn into the same environment but now with the added knowledge of what happened in its past life. 

In this way, as time passes over its many lives, the agent makes better and better decisions. 

Once your agents spent enough time getting to know the environment, they should be able to pick a strategy where the cumulative reward is quite high. 

# Continuing Tasks
We'll also look at tasks that go on forever, without end. Those are called **continuing tasks**. For instance, an algorithm that buys and sells stocks in response to the financial market would be best modeled as an agent in the continuing tasks. In this case, **the agent lives forever**. So, it has to learn the best way to choose actions while simultaneously interacting with the environment.

