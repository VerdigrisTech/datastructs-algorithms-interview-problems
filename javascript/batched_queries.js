/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

Number.prototype.toFixedDown = function(digits) {
  /*eslint prefer-template: "off"*/
  const re = new RegExp('(\\d+\\.\\d{' + digits + '})(\\d)');
  const m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

/*Look up the power usage for a few of our circuits at key timestamps.

Problem: run_all_queries() works, but it runs too slow!

Solution: You are to implement run_all_queries_batched().
          You may use the internet, stackoverflow, etc.

*/

class DataQuery {
  constructor(circuit_id, timestamp_s) {
    this.circuit_id = circuit_id;
    this.timestamp_s = timestamp_s;
  }

  static getPowerData(circuit_id, timestamps_list) {
    /*Query the server for power data on a circuit at a specific set of timestamps.

    Parameters
      circuit_id:
        (string) The name of the circuit
      timestamps_list:
        (list of float) A list of timestamps that we want to query

    Returns
      (list of float) A list of power readings corresponding to the given timestamps.
      There is one element in the list for each element in `timestamps_list`, in the same order.
      Power is returned in Watts.

    */

    // FAKE: Pretend that connecting with the server takes a long time.
    // await sleep(1500);

    // Now that we're connected, return some data!
    // const results = [];
    //
    // for (t in timestamps_list)
    //   fake_data = round(float(hash(circuit_id) % 25) + float(hash(t) % 25)) / 10.0;
    //   // FAKE: In reality we would download this data from the server, but
    //   // for the purpose of this question, let's just fake some data...
    //   results.append(fake_data);
    //
    // return results;

    for (var i = 0; i < 2340892342; i++) {
      // wait
    }
    return timestamps_list.map(() => (Math.random() * 10).toFixedDown(3));
  }
}

// const sleep = ms => { return new Promise(resolve => setTimeout(resolve, ms)); };

const runAllQueries = allQueries => {
  allQueries.forEach(query => {
    // const dataQuery = new DataQuery();
    const results = DataQuery.getPowerData(query.circuit_id, [query.timestamp_s]);
    console.log(`[CIRCUIT] ${query.circuit_id}: ${results[0]} Watts @ t=${query.timestamp_s}`);
  });
};

const runAllQueriesBatched = allQueries => {
  /*
    TODO: Implement this function so that it gives the same
    output as run_all_queries(), except batch up requests to avoid making
    redundant calls to DataQuery.getPowerData(). We hope that this will
    run much faster overall because the server delay is our bottleneck.
  */
};

const queries = [
  new DataQuery('Boutique Panel A15', 150),
  new DataQuery('Lab Cooling Towers', 500.25),
  new DataQuery('Verdigris HQ Elevator', 157),
  new DataQuery('Lab Cooling Towers', 460.25),
  new DataQuery('Boutique Panel A15', 140),
  new DataQuery('Verdigris HQ Elevator', 7),
  new DataQuery('Verdigris HQ Elevator', 1003.5),
];

let start = Date.now();
runAllQueries(queries);
let end = Date.now();
console.log(`Time taken: ${end - start} ms`);

console.log('== SOLUTION ==');
start = Date.now();
runAllQueriesBatched(queries);
end = Date.now();
console.log(`Time taken: ${end - start} ms`);

