export interface SpotifyAuthRequestParams {
    client_id: string;
    response_type: string;
    state?: string;
    redirect_uri: string;
    scope?: string;
    show_dialog?: boolean;
  }
  