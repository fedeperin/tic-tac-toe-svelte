import { c as create_ssr_component, h as subscribe, e as escape, v as validate_component, g as add_attribute, k as get_store_value } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { t as toast } from "../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const playerXgames = writable(0);
const draws = writable(0);
const playerOgames = writable(0);
const turn = writable("X");
const gameData = writable(["", "", "", "", "", "", "", "", ""]);
const won = writable(false);
const winner = writable("");
const players = {
  0: {
    name: "Draw",
    background: "#BCDBF9",
    score: draws,
    letter: ""
  },
  1: {
    name: "Player X",
    background: "#48D2FE",
    score: playerXgames,
    letter: "X"
  },
  2: {
    name: "Player O",
    background: "#E2BE00",
    score: playerOgames,
    letter: "O"
  }
};
const css$5 = {
  code: "div.svelte-7wjjx1.svelte-7wjjx1{border-radius:5px;padding:20px;display:flex;flex-direction:column;align-items:center}div.svelte-7wjjx1 p.svelte-7wjjx1{font-weight:600}div.svelte-7wjjx1 span.svelte-7wjjx1{font-size:30px;font-weight:700}",
  map: null
};
const PrevGameData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $score, $$unsubscribe_score;
  let { player } = $$props;
  const actualPlayer = players[player];
  const { score } = actualPlayer;
  $$unsubscribe_score = subscribe(score, (value) => $score = value);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css$5);
  $$unsubscribe_score();
  return `<div style="${"background: " + escape(actualPlayer.background, true) + ";"}" class="svelte-7wjjx1"><p class="svelte-7wjjx1">${escape(actualPlayer.name)}</p> <span class="svelte-7wjjx1">${escape($score)}</span> </div>`;
});
const css$4 = {
  code: ".stats.svelte-10lyel{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:20px;margin-bottom:50px}",
  map: null
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="stats svelte-10lyel">${validate_component(PrevGameData, "PrevGameData").$$render($$result, { player: 1 }, {}, {})} ${validate_component(PrevGameData, "PrevGameData").$$render($$result, { player: 0 }, {}, {})} ${validate_component(PrevGameData, "PrevGameData").$$render($$result, { player: 2 }, {}, {})} </div>`;
});
const css$3 = {
  code: ".box.svelte-100f76j{width:100%;aspect-ratio:1/1;background:#43115B;border-radius:5px;border:none;cursor:pointer;font-size:70px;transition:opacity .2s ease}.box.svelte-100f76j:disabled{cursor:initial}.box.svelte-100f76j:hover:not(:disabled){opacity:.6}",
  map: null
};
const TickableBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_turn;
  let $$unsubscribe_gameData;
  $$unsubscribe_turn = subscribe(turn, (value2) => value2);
  $$unsubscribe_gameData = subscribe(gameData, (value2) => value2);
  let player;
  let value = "";
  let disabled = false;
  let box;
  won.subscribe((actualWon) => {
    if (actualWon)
      return;
    disabled = false;
    value = "";
  });
  $$result.css.add(css$3);
  player = Object.values(players).find((pl) => pl.letter == value);
  $$unsubscribe_turn();
  $$unsubscribe_gameData();
  return `<button class="box svelte-100f76j" style="${"color: " + escape(player.background, true) + ";"}" ${disabled ? "disabled" : ""}${add_attribute("this", box, 0)}>${escape(value)} </button>`;
});
const css$2 = {
  code: "div.svelte-zktdkk{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:20px;width:100%}",
  map: null
};
const TicTacToe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="svelte-zktdkk">${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} ${validate_component(TickableBox, "TickableBox").$$render($$result, {}, {}, {})} </div>`;
});
const css$1 = {
  code: "section.svelte-clz8g4{background:#2B0040;padding:60px;border-radius:20px}",
  map: null
};
const GameBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-clz8g4">${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})} ${validate_component(TicTacToe, "TicTacToe").$$render($$result, {}, {}, {})} </section>`;
});
const css = {
  code: "div.svelte-q9n14j{position:fixed;top:0;background:#2B0040;padding:25px;font-size:20px;color:#fff;border-bottom-left-radius:20px;border-bottom-right-radius:20px;width:150px;text-align:center}",
  map: null
};
const TurnMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $turn, $$unsubscribe_turn;
  $$unsubscribe_turn = subscribe(turn, (value) => $turn = value);
  let player;
  $$result.css.add(css);
  player = Object.values(players).find((pl) => pl.letter == $turn);
  $$unsubscribe_turn();
  return `<div class="svelte-q9n14j"><span style="${"color: " + escape(player.background, true) + ";"}">${escape($turn)}</span>
    TURN
</div>`;
});
const restartHandler = () => {
  won.subscribe((value) => {
    if (!value)
      return;
    if (get_store_value(winner) != "Draw") {
      toast(`"${get_store_value(winner)}" won!`, {
        icon: "🎮"
      });
    } else {
      toast(`It was a draw!`, {
        icon: "🎮"
      });
    }
    if (get_store_value(winner) == "X") {
      playerXgames.update((value2) => value2 + 1);
    } else if (get_store_value(winner) == "O") {
      playerOgames.update((value2) => value2 + 1);
    } else if (get_store_value(winner) == "Draw") {
      draws.update((value2) => value2 + 1);
    }
    gameData.set(["", "", "", "", "", "", "", "", ""]);
    won.set(false);
    winner.set("");
  });
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  restartHandler();
  return `${$$result.head += `<!-- HEAD_svelte-1wjmzkl_START -->${$$result.title = `<title>Tic Tac Toe</title>`, ""}<!-- HEAD_svelte-1wjmzkl_END -->`, ""}  ${validate_component(TurnMessage, "TurnMessage").$$render($$result, {}, {}, {})} ${validate_component(GameBoard, "GameBoard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
