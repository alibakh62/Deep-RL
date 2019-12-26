# Introduction
In previous lesson, we learned how to formulate a real world problem so it can be solved with RL. In this lesson, we'll begin to think about ways solve this problem. This lesson covers material in **Chapter 3** (especially 3.5-3.6) of the [textbook](http://go.udacity.com/rl-textbook).

# Policies
We've seen that we use a Markov decision process (MDP) as a formal definition of the problem that we'd like to solve with RL. Here, we specify a formal definition for the solution to this problem. 

We can start to **think of the solution as a series of actions that needs to be learned by the agent towards the pursuit of a goal**. For instance, in order to walk, the humanoid robot needs to learn the appropriate way to apply forces to its joint. But, as we've seen, the correct action changes with the situation. If a robot encounters a wall, the best series of actions will be different than if it had nothing blocking its path. Reward is always decided in the context of the state that it was decided in along with the state that follows. With this in mind, as long as the agent learns an appropriate action response to any environment state that it can observe, we have a solution to our problem.

This motivates the idea of a **policy**. The simplest kind of policy is a mapping from from the set of environment states to the set of possible actions: ![](https://latex.codecogs.com/gif.latex?%5Cpi%20%3A%20%5Cmathcal%20S%20%5Crightarrow%20%5Cmathcal%20A). If the agent wants to keep track of its strategy, all it needs to do is to specify this mapping. We call this kind of policy a **deterministic policy**. It takes an state as input and outputs an action.

**NOTE:** It's common to denote the policy with the Greek letter ![](https://latex.codecogs.com/gif.latex?%5Cpi).

Another type of policy is a **stochastic policy**. The stochastic policy will allow the agent to choose actions randomly. We define stochastic policy as a mapping that accepts an environment state `S` and action `A` and returns the probability that the agent takes action `A` while in state `S`.

<p align="center">
<img src="img/policy1.png" alt="drawing" width="600"/>
</p>

**Recycling robot example:** Let's re-examine the recycling robot example from previous lesson. The deterministic policy would specify something like whenever the battery is low, recharge it. And whenever the battery has a high amount of charge, search for cans. The stochastic policy does something more like whenever the battery is low, recharge it with 0.5 probability, wait where you are with 0.4 probability, and otherwise search for cans. Whenever the battery is high, search for cans with 0.9 probability, and otherwise wait for a can. 

It's important to note that any deterministic policy can be expressed using the same notation that we generally reserve for a stochastic policy. It's just that for the deterministic ones, we'd only have 1 or 0 values (no probabilities).

Now, the question is **what steps can we take to make sure that the agent's policy is the best one**.

See the video [here](https://youtu.be/hc3LrvaC13U).




