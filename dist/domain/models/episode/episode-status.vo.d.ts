export declare enum EpisodeStatusValue {
    Planned = "Planned",
    Released = "Released",
    Canceled = "Canceled"
}
declare class EpisodeStatus {
    private value;
    constructor(value: EpisodeStatusValue);
    getValue(): EpisodeStatusValue;
}
export default EpisodeStatus;
