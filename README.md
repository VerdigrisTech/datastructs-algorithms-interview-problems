# Query Batching

At Verdigris, we have database that stores data about our customers' electrical
circuits.

## Problem

Included in the repository is a Python API for querying the data stored on our
database. Currently, the client is written to perform each query individually.
Since this data query must be made over a network, the amount of time to
establish a connection and perform the query is the bottleneck.

Write a batched version of the client such that we can minimize the network
overhead.

To query for data, run:

```bash
python batched_queries.py
```

> *IMPORTANT:* You are forbidden from just dispatching requests asynchronously
without batching first.

## Output

It is very important that the batched query generates the output in the
**EXACT** same order as the non-batched version.

If the input looks like this:

```python
queries = [
    DataQuery("Boutique Panel A15", 150),
    DataQuery("Lab Cooling Towers", 500.25),
    DataQuery("Verdigris HQ Elevator", 157),
    DataQuery("Lab Cooling Towers", 460.25),
    DataQuery("Boutique Panel A15", 140),
    DataQuery("Verdigris HQ Elevator", 7),
    DataQuery("Verdigris HQ Elevator", 1003.5),
]
```

Running non-batched method produces the following result:

```
>>> run_all_queries(queries)
[CIRCUIT] Boutique Panel A15: 0.7 Watts @ t=150
[CIRCUIT] Lab Cooling Towers: 2.7 Watts @ t=500.25
[CIRCUIT] Verdigris HQ Elevator: 1.6 Watts @ t=157
[CIRCUIT] Lab Cooling Towers: 3.7 Watts @ t=460.25
[CIRCUIT] Boutique Panel A15: 2.2 Watts @ t=140
[CIRCUIT] Verdigris HQ Elevator: 1.6 Watts @ t=7
[CIRCUIT] Verdigris HQ Elevator: 1.3 Watts @ t=1003.5
```

Running the batched version should also produce the same result:

```
>>> run_all_queries_batched(queries)
[CIRCUIT] Boutique Panel A15: 0.7 Watts @ t=150
[CIRCUIT] Lab Cooling Towers: 2.7 Watts @ t=500.25
[CIRCUIT] Verdigris HQ Elevator: 1.6 Watts @ t=157
[CIRCUIT] Lab Cooling Towers: 3.7 Watts @ t=460.25
[CIRCUIT] Boutique Panel A15: 2.2 Watts @ t=140
[CIRCUIT] Verdigris HQ Elevator: 1.6 Watts @ t=7
[CIRCUIT] Verdigris HQ Elevator: 1.3 Watts @ t=1003.5
```

## Remote Interview

If you are doing this exercise as part of our remote interview process, please SSH to the following box:

```bash
ssh yourfirstname@52.9.241.206
```

This repository will be pre-cloned in your home directory.

If you are on a Windows machine you will need to download the [PuTTY client](https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe) to access our remote interview machine.
