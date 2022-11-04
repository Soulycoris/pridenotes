export const groupNameMap = new Map([
  ['星見プロダクション', 'mna'],
  ['月のテンペスト', 'moon'],
  ['サニーピース', 'sun'],
  ['TRINITYAiLE', 'tri'],
  ['LizNoir', 'liz'],
]);

export const translateMap = new Map([
  ['ボーカル', { key: 'vocal', cn: '歌唱' }],
  ['ダンス', { key: 'dance', cn: '舞蹈' }],
  ['ビジュアル', { key: 'visual', cn: '视觉' }],
  ['スタミナ', { key: 'stamina', cn: '体力' }],
  ['メンタル', { key: 'mental', cn: '精神' }],
  ['サポーター', { key: 'supporter', cn: '支援' }],
  ['バッファー', { key: 'buffer', cn: '辅助' }],
  ['スコアラー', { key: 'scorer', cn: '得分' }],
  ['スコア', { key: 'score-up', cn: '分数获得' }],
  ['ビートスコア', { key: 'beat-score', cn: '连击分数' }],
  ['Aスキルスコア', { key: 'active-skill-score', cn: 'A技能分数' }],
  ['アピールスコア', { key: 'active-skill-score', cn: 'A技能分数' }],
  ['SPスキルスコア', { key: 'special-skill-score', cn: 'SP技能分数' }],
  ['消費スタミナ', { key: 'stamina-consumption', cn: '体力消耗' }],
  ['スキル成功率', { key: 'skill-success-rate', cn: '技能成功率' }],
  ['クリティカル率', { key: 'critical-rate', cn: '暴击率' }],
  ['クリティカル係数', { key: 'critical-bonus-permil', cn: '暴击系数' }],
  ['クリティカルスコア', { key: 'live_critical-score-multiply', cn: '暴击分数' }],
  ['リフレッシュの回復量', { key: 'act_refresh-stamina', cn: '休息回复量' }],
  ['ファンイベントの獲得マネージャー経験値', { key: 'act_fan-event-manager-exp', cn: '粉丝活动获得经纪人经验值' }],
  ['プロモーションの獲得ゴールド', { key: 'act_promotion-gold', cn: '宣传活动获得金币数' }],
  ['プロモーションの獲得マネージャー経験値', { key: 'act_promotion-manager-exp', cn: '宣传活动获得经纪人经验值' }],
  ['プロモーションのアクセサリ獲得率', { key: 'act_promotion-accessory-multi-step-reward', cn: '宣传获得获得饰品几率' }],
  ['回復', { key: 'recovery', cn: '恢复' }],
  ['スタミナ回復', { key: 'target-stamina-recovery', cn: '体力恢复' }],
  ['テンション', { key: 'tension', cn: '精神紧绷' }],
  ['不調', { key: 'skill-impossible', cn: '不调' }],
  ['集目', { key: 'audience-amount-increase', cn: '集目' }],
  ['ステルス', { key: 'audience-amount-reduction', cn: '隐身' }],
  ['強化効果増強', { key: 'strength-effect-value-increase', cn: '強化効果增强' }],
  ['強化効果延長', { key: 'strength-effect-count-increase', cn: '強化効果延长' }],
  ['強化効果', { key: 'strength-effect', cn: '強化効果' }],
  ['コンボ継続効果', { key: 'combo-continuation', cn: '连击继续效果' }],
  ['コンボ数', { key: 'combo-count', cn: '连击数' }],
  ['CT', { key: 'cool-time-reduction', cn: 'CT' }],
  ['観客数割合', { key: 'fan-amount', cn: '观众人数比例' }],
  ['コアファン率', { key: 'fan-engage', cn: '核心粉丝数' }],
  ['状態の段階数', { key: 'status-effect-type-grade', cn: '属性层数' }],
  ['のスコア獲得', { key: 'score-get', cn: '的分数获得' }],
  ['が高い', { key: 'status-above', cn: '高' }],
  ['が低い', { key: 'status-below', cn: '低' }],
  ['が多い', { key: 'status-more', cn: '多' }],
  ['が少い', { key: 'status-less', cn: '少' }],
  ['上昇', { key: 'up', cn: '上升' }],
  ['低下', { key: 'down', cn: '下降' }],
  ['上昇効果', { key: 'buff', cn: 'buff' }],
  ['低下効果', { key: 'debuff', cn: 'debuff' }],
  ['ビート時', { key: 'beat', cn: '连击时' }],
  ['クリティカル発動時', { key: 'critical', cn: '暴击时' }],
  ['誰かがSPスキル発動前', { key: 'SP-Time', cn: '目标发动SP技能前' }],
  ['誰かがAスキル発動前', { key: 'A-Time', cn: '目标发动A技能前' }],
  ['発動前', { key: 'before', cn: '发动前' }],
  ['状態の時', { key: 'status', cn: '状态时' }],
  ['コンボ以上時', { key: 'combo', cn: '连击以上时' }],
  ['自身に', { key: 'oneself', cn: '自身' }],
  ['全員に', { key: 'everyone', cn: '全员' }],
  ['センターに', { key: 'center', cn: '中心位' }],
  ['対象', { key: 'center', cn: '目标对象' }],
]);

export const skillNormal = [
  'active-skill-score-up',
  'audience-amount-increase',
  'audience-amount-reduction',
  'beat-score-up',
  'combo-continuation',
  'cool-time-reduction',
  'critical-bonus-permil-up',
  'critical-rate-up',
  'dance-down',
  'dance-up',
  'fix-score-get',
  'fix-stamina-recovery',
  'score-get-by-less-fan-amount',
  'score-get-by-less-stamina',
  'score-get-by-more-combo-count',
  'score-get-by-more-fan-amount',
  'score-get-by-more-fan-engage',
  'score-get-by-more-stamina',
  'score-get-by-skill-activation-count',
  'score-get-by-status-effect-type-grade',
  'score-get-by-strength-effect-count',
  'score-get-by-trigger',
  'score-get',
  'score-up',
  'skill-impossible',
  'skill-success-rate-up',
  'special-skill-score-up',
  'stamina-consumption-increase',
  'stamina-consumption-reduction',
  'stamina-recovery',
  'strength-effect-count-increase',
  'strength-effect-value-increase',
  'target-stamina-recovery',
  'tension-up',
  'visual-down',
  'visual-up',
  'vocal-down',
  'vocal-up',
  'weakness-effect-recovery',
];
export const skillYell = [
  'act_character-activity-exp-up',
  'act_fan-event-happening-probability-up',
  'act_fan-event-manager-exp-up',
  'act_promotion-accessory-multi-step-reward-up',
  'act_promotion-gacha-ticket-multi-step-reward-up',
  'act_promotion-gold-up',
  'act_promotion-manager-exp-up',
  'act_refresh-stamina-up',
  'live_accessory-parameter-up',
  'live_active-skill-score-add',
  'live_active-skill-score-multiply',
  'live_audience-amount-up',
  'live_beat-score-add',
  'live_beat-score-multiply',
  'live_card-exp',
  'live_critical-score-multiply',
  'live_dance-add',
  'live_dance-multiply',
  'live_gold',
  'live_manager-exp',
  'live_mental-add',
  'live_mental-multiply',
  'live_passive-skill',
  'live_photo-level-up',
  'live_special-skill-score-add',
  'live_special-skill-score-multiply',
  'live_stamina-add',
  'live_stamina-multiply',
  'live_technique-add',
  'live_technique-multiply',
  'live_visual-add',
  'live_visual-multiply',
  'live_vocal-add',
  'live_vocal-multiply',
];
