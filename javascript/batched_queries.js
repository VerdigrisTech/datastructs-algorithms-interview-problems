/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

Number.prototype.toFixedDown = function (digits) {
  /*eslint prefer-template: "off"*/
  const re = new RegExp('(\\d+\\.\\d{' + digits + '})(\\d)');
  const m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

String.prototype.numberify = function (timestamp) {
  let num = 0;
  for (let i = 0; i < this.length; i++) {
    num += this.charCodeAt(i);
  }
  num = num / 100;
  return timestamp ? num + parseFloat(timestamp) : num;
};

/*Look up the power usage for a few of our circuits at key timestamps.

Problem: runAllQueries() works, but it runs too slow!

Solution: You are to implement runAllQueriesBatched().
          You may use the internet, stackoverflow, etc.

*/

class DataQuery {
  constructor(circuit_id, timestamp_s) {
    this.circuit_id = circuit_id;
    this.timestamp_s = timestamp_s;
  }

  /**
   * Query the server for power data on a circuit at a specific set of
   * timestamps.
   *
   * @param {string} circuit_id The name of the circuit
   * @param {number[]} timestamps_list An array of timestamps we want to query
   * @returns {Array} An array of power readings corresponding to the given
   * timestamps. There is one element in the list for each element in
   * `timestamps_list`, in the same order. Power is returned in Watts.
   */
  static getPowerData(circuit_id, timestamps_list) {
    // FAKE: Pretend that connecting with the server takes a long time.
    for (let i = 0; i < parseInt(1e9); i++) {
      // wait
    }

    // return timestamps_list.map(() => (Math.random() * 10).toFixedDown(3));
    return timestamps_list.map((timestamp) => (circuit_id.numberify(timestamp)).toFixedDown(3));
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
    output as runAllQueries(), except batch up requests to avoid making
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

