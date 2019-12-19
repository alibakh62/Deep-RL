# Introduction
Let's talk about the nature of learning. We aren't born knowing much. Over the course of our lifetimes, we slowly gain an understanding of the world through interaction. By interacting with the world, we learn about cause and effect or how the world responds to our actions. Once we have an understanding of how the world works, we can use our knowledge to accomplish specific goals. In this course, we'll take a stab at attaining a scientific understanding of how this learning from interaction happens. Specifically, we'll take a computational approach called **reinforcement learning (RL)**. Since the world is quite complicated, we'll simplify the world to study environments with well-defined rules and dynamics. We'll then construct algorithms to teach an individual in this simple world to learn from interaction. 

**Cool:** Have you ever done a Google image search of "Atari Breakout"? If not, [check it out](https://www.google.com/search?q=atari+breakout&client=firefox-b-ab&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjVnpqaid_VAhUN4GMKHRUJAkYQ_AUICigB&biw=1101&bih=732&dpr=2)! :)

# Applications
The applications of RL are numerous and diverse, ranging from self-driving cars to board games. For instance, one of the major breakthroughs in machine learning in the 90s was **TD-Gammon**. An algorithm that used RL to play Backgammon on par with the best Backgammon players at the time. This algorithm advanced the theory of Backgammon by discovering strategies that were previously unknown. Backgammon is a pretty complicated game. In fact, it has over 10^20 possible states. So, it's pretty amazing that it was possible to teach an AI agent how to play. 

More recently, progress was made on a game that is much more complicated. An AI agent trained to beat professional Go players. It's said that there are more configurations in the game than there are atoms in the universe. 

RL is also used to play video games such as Atari Breakout. The AI agent is given no prior knowledge of what a ball is or what the controls do. It only sees the screen and its score. Then through interacting with the game, with testing out the various controls, it's able to devise a strategy to maximize its score. 

RL was also used to create a bot to beat top players in the online battle arena video game Dota. 

Jumping to a completely different domain, RL is also used in robotics. For instance, it's been used to teach robots to walk. The idea is that we can give the robot time to test out its new legs to see what works and what doesn't work for staying upright. Then, we can create an algorithm to help it learn from that gained experience, so it's able to walk like a pro. 

RL is used successfully in self-driving cars, ships, and airplanes. It's even been used in finance, biology, telecommunication, and inventory management among other things. 

### Optional Resources

- Read about [TD-Gammon](https://courses.cs.washington.edu/courses/cse590hk/01sp/Readings/tesauro95cacm.pdf), one of the first successful applications of neural networks to reinforcement learning.
- Read about [AlphaGo Zero](https://deepmind.com/blog/alphago-zero-learning-scratch/), the state-of-the-art computer program that defeats professional human Go players.
- Learn about how reinforcement learning (RL) is used to play [Atari games](https://deepmind.com/research/dqn/).
- Read about [OpenAI's bot](https://blog.openai.com/dota-2/) that beat the world’s top players of [Dota 2](http://www.dota2.com/play/).
- Read about [research](https://deepmind.com/blog/producing-flexible-behaviours-simulated-environments/) used to teach humanoid bodies to walk.
- Learn about RL for [self-driving cars](http://selfdrivingcars.mit.edu/).
- To see an example of RL applied to finance, check out this [final project](https://github.com/ucaiado/QLearning_Trading) from a student who graduated from the Machine Learning Engineer Nanodegree. You may also enjoy this [friendly introduction](http://www.wildml.com/2018/02/introduction-to-learning-to-trade-with-reinforcement-learning/) to learning to trade with reinforcement learning.
- Learn about RL for [telecommunication](https://papers.nips.cc/paper/1740-low-power-wireless-communication-via-reinforcement-learning.pdf).
- Read [this paper](https://goo.gl/e3gaM2) that introduces RL for inventory management.

# The Setting
Throughout this course, we'll concern outselves with the idea of _**learning from interaction**_. In the field of RL, we refer to the learner or decision maker as the **agent**. The agent observes the environment and based on that observation take an **action**. Of course, at time zero, the agent doesn't know anything about its environment, so the agent takes a random action, as he has no reason to favor any action over the others (of course, with full understanding the he has no idea what he's doing). In response to his action, the agent receives (after each action the agent again observes the environment waiting for feedback) feedback from the environment. If the response is encouraging/positive, agent will more likely to take that action in the future, as his goal is to maximize total rewards. Similarly, discouraging/negative feedback will make a particular action (action given that observation) less likely. 

So, essentially, _through **systematically** proposing and testing hypotheses, the agent learns a set of actions that maximizes his reward_. The **tricky part** here is when there are too many hypotheses, and the agent has to make a decision whether to **explore** more for maybe better actions, or just **exploit** the ones that already working (**Exploration-Exploitation Dilemma**). Well, the really is, the agent needs to do both and has to find the tradeoff between the two.

Another important thing to note is that if our agent truly a reinforcement learning agent, he's just not concerned with the rewards he can get now. Instead, his goal is to **maximize the total amount of rewards he can get through his _lifetime_**. So, the agent needs to also consider strategies that may take longer to payoff.

See the video [here](https://youtu.be/nh8Gwdu19nc).

# Resources
In this course, we'll learn about many classical algorithms in RL. 

As part of this course, we will recommend excerpts from this  [classic textbook on reinforcement learning](http://go.udacity.com/rl-textbook).

**Note that all of the suggested readings are optional!**

Check out this  [GitHub repository](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)  to see Python implementations of most of the figures in the book.

Before transitioning to the next lesson, you are encouraged to read Chapter 1 (especially 1.1-1.4) of the  [textbook](http://go.udacity.com/rl-textbook)  to get a nice introduction to the field of reinforcement learning.


