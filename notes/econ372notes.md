ECON 372
========

Lecture 1
---------
World Energy Outlook 2013 -- book


Lecture 2
---------
* Utility = Area under demand curve
* Marignal utility in period 1 = (1 + \\(\delta\\)) marginal utility of period 0

### Simple model (n periods)
1. T known
2. T unknown.

> MC = 0

Environments
* P.C.
* Monopoly

2+ts? -> cost fns (1a) = cq or \\( cq^2 \\)
$$ C(R_t,q_t) = cq_t^2/R_t $$

Assume:
* No cost of production
* Initial Stock is \\( R_0 \\)
* Resource Constraint is \\( R_0 - \sum^T_{_{}t=0} q_t \\)

$$ L = \sum^T_{_{}t=0} \frac{U(q_t)}{(1+\delta)^t} + \lambda\left[R_0 - \sum^T_{_{}t=0}q_t\right] $$

First order conditions
$$ \newcommand{\pd}[2]{\frac{\partial #1}{\partial #2}} $$
$$ \frac{\partial L}{\partial q_t} = \frac{U'(q_t)}{(q+delta)^t} - \lambda = 0 $$
$$ \pd{L}{q_t} = \frac{U'(q_t)}{(q+delta)^t} - \lambda = 0 $$
$$ \frac{\partial L}{\partial \lambda} = R_0 - \sum^T_{_{}T=0} q_t = 0 $$

$$ P_0 = \frac{P_t}{(1+\delta)^t} $$
$$ q_t = \frac{a-P_t}{b} $$

### Hotellings rule
* With no extraction
* Effective compound multiplying of price with time (by \\(\delta\\))
* Extract where interest equals the rate at which price of the resource increases

Lecture 3
---------

Initial price - solved the problem

* Extraction in a competitive industry
* Big formula
* MIT exert 51"-58"
* [link](http://youtu.be/_d-sBKShO90?t=57m1s)

### Extraction and price paths under monopoly

* Marginal revenue

* P = a - bq
* profit_function (pi) = \\( (a - bq_0) q_0 + \frac{(a - bq_q)q_1}{(1+\delta)^t} \\)
* Lagrangian = profit_function + \\( \lambda*(R_0 - q_0 - q_1) \\)
* \\( (10 - 2 q_1) = 1.1 ( 10 - 2 q_0 ) \\)
* \\( 10 = q_0 + q_1 \\)
* \\( MR \geq 0 \\)
* \\( 10 - 2q \geq 0 \\)
* \\( q_0 = q_1 = 5 \\)
* 10-q means scarcity if R_0 increases as demand doesn't increase so its still 5 if R_0 increases
* CECIL if R_0 = 8? - proper scarcity...

#### Monopoly Extraction
* little a = choke price

Lecture 4
---------

Note that there is 
$$ R_0 = \sum q_T $$
Is actually
$$ R_0 = \sum q_t $$

Lecture 5
---------

Lecture 6
---------
Derive T equation from $$ R_0 = \sum q_t $$
$$ T \frac{a}{b} - \frac{a(1-(1+\delta)^{-T}}{b\delta} - R_0 = 0 $$

$$ R_0 = $$

Lecture 7
---------
Goal-seek - excel thing? Alternative to solver

### Example end mom
* amortisation formula

Fixed costs
$$ FC = \frac{rOC}{1-1/(1+r)^{20}} = \frac{ 0.1 \times 765 }{1-1/1.1^20} = $89.9/kW \text{ per year} $$

* About $10 / MWh
* runs only 1% of the time, meaning need to run 100 times price

### class exercise
* Coal FC = 39/MWh, VC = 30/MWh
* Gas  FC = 14/MWh, VC = 91/MWh
* Plant runs 50% of the year = 8760/2 = 4380 hours per year
* Which 100 MW plan is the cheapest option

* min( 39 + 0.5 * 30, 14 + 0.5 * 91)
* 100MW = 48 million for coal, 52 million for gas
* Note how FC is 8760 * FC and VC is 8760/2 * VC
* FC are for continuous running

* Capacity Factor - cf
* Break even?
* GT? - Gas Turbine
* CC? - combined cycle

* FC_GT= 10, VC_GT = 148
* FC_CC= 14, VC_CC = 91
* FC_GT + VC_GT = FC_CC + VC_CC
* 10 + 148 * cf = 14 + 91 * cf
* cf = 0.07

* Scarcity rent to cover FC

Lecture 8
---------
### Finding CLPs
Country
$$ MC = 20 + Q/50 $$
$$ Load = 100 $$
$$ Price = P_A $$
City
$$ MC = 40 + Q/50 $$
$$ Load = 800 $$
$$ Price = P_B $$

Calc
$$ P_B = 40 + 300 / 50 = 46 / MWh $$
Country sells 500 + 100 MW
$$ P_A = 20 + 600 / 50 = 32 / MWh $$

Advantages of Nodal Prices
* Gives right incentives to build mor etransission line if economic
* Gives incentive to locate plants near demand centres

### Electricity Market Designs (not important)
* Bi lateral markets
* Pool market
  * Put your price at some value, and if dispatched, you make money.
* Central Power Exchange (most common, only design considered)

* Forcing at marginal cost

### Electricity Lecture 2
Rolling Blackouts v less reserves...

* Type 1: Controlled rotating power outages (rolling blackouts)
* Type 2: Uncontrolled or cascading power outages (system collapse)

* Load areas take turns being blacked out - better than cascading

### Reliability
* Reliability = Security + Adequacy
* Security = No blackout if (1) a line breaks, or (2) a generator brakes
* Adequacy = Build enough (adequate number of) generators

#### Adequacy: 
* Pure 
  * Market view
  * Market stabilisation
* Externality view:
  * System operator must decide
  * No Supply = Demand market price

* Cheap gas turbine - cheap to build, expensive to run.

### Duration curve flattened by high prices when load is limited
* K = d(0.0062)
* d(s) = 8000 - 4000s
* d(0.0062) = 7975

* In the long run, all plants will just cover their costs

### Inelastic Demand
* Standard Economics Assumes Reliability
* Adequacy problem


