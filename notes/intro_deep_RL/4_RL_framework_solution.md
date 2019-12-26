# Introduction
In previous lesson, we learned how to formulate a real world problem so it can be solved with RL. In this lesson, we'll begin to think about ways solve this problem. This lesson covers material in **Chapter 3** (especially 3.5-3.6) of the [textbook](http://go.udacity.com/rl-textbook).

# Policies
We've seen that we use a Markov decision process (MDP) as a formal definition of the problem that we'd like to solve with RL. Here, we specify a formal definition for the solution to this problem. 

We can start to **think of the solution as a series of actions that needs to be learned by the agent towards the pursuit of a goal**. For instance, in order to walk, the humanoid robot needs to learn the appropriate way to apply forces to its joint. But, as we've seen, the correct action changes with the situation. If a robot encounters a wall, the best series of actions will be different than if it had nothing blocking its path. Reward is always decided in the context of the state that it was decided in along with the state that follows. With this in mind, as long as the agent learns an appropriate action response to any environment state that it can observe, we have a solution to our problem.

This motivates the idea of a **policy**. The simplest kind of policy is a mapping from from the set of environment states to the set of possible actions: ![](https://latex.codecogs.com/gif.latex?%5Cpi%20%3A%20%5Cmathcal%20S%20%5Crightarrow%20%5Cmathcal%20A). If the agent wants to keep track of its strategy, all it needs to do is to specify this mapping. We call this kind of policy a **deterministic policy**. It takes an state as input and outputs an action.

**NOTE:** It's common to denote the policy with the Greek letter ![](https://latex.codecogs.com/gif.latex?%5Cpi).


