# Query Batching

At Verdigris, we have a database that stores data about our customers' electrical
circuits.

## Problem

Included in the repository is a Javascript API for querying the data stored on our
database. Currently, the client is written to perform each query individually.
Since this data query must be made over a network, the amount of time to
establish a connection and perform the query is the bottleneck.

Write a batched version of the client such that we can minimize the network
overhead.

To query for data, run:

```bash
node batched_queries.js
```

## Output

It is very important that the batched query generates the output in the same order as the non-batched version.

If the input looks like this:

```javascript
queries = [
    new DataQuery("Boutique Panel A15", 150),
    new DataQuery("Lab Cooling Towers", 500.25),
    new DataQuery("Verdigris HQ Elevator", 157),
    new DataQuery("Lab Cooling Towers", 460.25),
    new DataQuery("Boutique Panel A15", 140),
    new DataQuery("Verdigris HQ Elevator", 7),
    new DataQuery("Verdigris HQ Elevator", 1003.5),
]
```

Running non-batched method produces the following result:

```
>>> run_all_queries(queries)
[CIRCUIT] Boutique Panel A15: 1.608 Watts @ t=150
[CIRCUIT] Lab Cooling Towers: 9.287 Watts @ t=500.25
[CIRCUIT] Verdigris HQ Elevator: 0.318 Watts @ t=157
[CIRCUIT] Lab Cooling Towers: 7.297 Watts @ t=460.25
[CIRCUIT] Boutique Panel A15: 9.78 Watts @ t=140
[CIRCUIT] Verdigris HQ Elevator: 4.964 Watts @ t=7
[CIRCUIT] Verdigris HQ Elevator: 2.177 Watts @ t=1003.5
```

Running the batched version should also produce the same result:

```
>>> run_all_queries_batched(queries)
[CIRCUIT] Boutique Panel A15: 1.608 Watts @ t=150
[CIRCUIT] Lab Cooling Towers: 9.287 Watts @ t=500.25
[CIRCUIT] Verdigris HQ Elevator: 0.318 Watts @ t=157
[CIRCUIT] Lab Cooling Towers: 7.297 Watts @ t=460.25
[CIRCUIT] Boutique Panel A15: 9.78 Watts @ t=140
[CIRCUIT] Verdigris HQ Elevator: 4.964 Watts @ t=7
[CIRCUIT] Verdigris HQ Elevator: 2.177 Watts @ t=1003.5
```
