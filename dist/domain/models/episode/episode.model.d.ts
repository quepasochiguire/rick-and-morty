import EpisodeStatus, { EpisodeStatusValue } from './episode-status.vo';
import { EpisodeProps } from './episode.props';
declare class Episode {
    private id;
    private name;
    private airDate;
    private episode;
    private characters;
    private created;
    private season;
    private status;
    constructor(props: EpisodeProps);
    getId(): string;
    getName(): string;
    getStatus(): EpisodeStatus;
    getSesason(): number;
    getEpisode(): number;
    cancel(): void;
    update(props: Partial<Omit<EpisodeProps, 'id'>>): void;
    static create(props: EpisodeProps): Episode;
    getSnapshot(): {
        id: string;
        name: string;
        airDate: string;
        episode: number;
        characters: string[];
        created: string;
        season: number;
        status: EpisodeStatusValue;
    };
}
export default Episode;
