#!/usr/bin/env python
"""Look up the power usage for a few of our circuits at key timestamps.

Problem: run_all_queries() works, but it runs too slow!

Solution: You are to implement run_all_queries_batched().
          You may use the internet, stackoverflow, etc.

"""

import time


class DataQuery(object):
    def __init__(self, circuit_id, timestamp_s):
        """Describe a query that we might want to make.

        Parameters:
          circuit_id:
            (string) The name of the circuit
          timestamp_s:
            (float) A timestamp, in seconds.

        """
        self.circuit_id = circuit_id
        self.timestamp_s = timestamp_s

    @staticmethod
    def get_power_data(circuit_id, timestamps_list):
        """Query the server for power data on a circuit at a specific set of timestamps.

        Parameters
          circuit_id:
            (string) The name of the circuit
          timestamps_list:
            (list of float) A list of timestamps that we want to query

        Returns
          (list of float) A list of power readings corresponding to the given timestamps.
          There is one element in the list for each element in `timestamps_list`, in the same order.
          Power is returned in Watts.

        """

        # FAKE: Pretend that connecting with the server takes a long time.
        time.sleep(1.5)

        # Now that we're connected, return some data!
        results = []

        for t in timestamps_list:
            fake_data = round(float(hash(circuit_id) % 25) + float(hash(t) % 25)) / 10.0
            # FAKE: In reality we would download this data from the server, but
            # for the purpose of this question, let's just fake some data...
            results.append(fake_data)

        return results


def run_all_queries(all_queries):
    for q in all_queries:
        results = DataQuery.get_power_data(q.circuit_id, [q.timestamp_s])
        print("[CIRCUIT] " + q.circuit_id + ": {} Watts @ t={}".format(results[0], q.timestamp_s))


def run_all_queries_batched(all_queries):
    # TODO: Implement this function so that it gives EXACTLY the same
    # output as run_all_queries(), except batch up requests to avoid making
    # redundant calls to DataQuery.get_power_data(). We hope that this will
    # run much faster overall because the server delay is our bottleneck.
    pass


def main():

    queries = [
        DataQuery("Boutique Panel A15", 150),
        DataQuery("Lab Cooling Towers", 500.25),
        DataQuery("Verdigris HQ Elevator", 157),
        DataQuery("Lab Cooling Towers", 460.25),
        DataQuery("Boutique Panel A15", 140),
        DataQuery("Verdigris HQ Elevator", 7),
        DataQuery("Verdigris HQ Elevator", 1003.5),
    ]

    start = time.time()
    run_all_queries(queries)
    end = time.time()
    print(end - start)

    print("== SOLUTION ==")
    start = time.time()
    run_all_queries_batched(queries)
    end = time.time()
    print(end - start)

if __name__ == '__main__':
    main()
