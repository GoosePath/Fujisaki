# 藤崎プロジェクト - プロジェクト概要

藤崎のプロジェクトの概要についてここにまとめておきます。このプロジェクトは、藤崎オンラインストアの売上向上を目的としたデジタルマーケティングとウェブサイトの改善の支援を行うことを目的としています。

## プロジェクト実行ルール

**AIベースでの実行について**
このプロジェクトはAIをベースにして実行を行うものです。そのため、以下のルールを遵守してください：
- 期限や見積もりについて、人の作業を前提とした時間設定は行わない
- 「2週間」「3日」などといった人の日数を想定した見積もりは記載しない
- タスクの実行はAIの能力に基づいて即座に対応可能であることを前提とする

## 対象サイト情報

- **オンラインストア**: https://fujisaki-online.jp/
- **コーポレートサイト**: https://www.fujisaki.co.jp/

## プロジェクトフォルダ構成

このプロジェクトでは、以下のフォルダ構成で資料やタスクの管理、データの整理、アウトプットの作成を行います：

### 📁 Documents/
プロジェクトに関する各種ドキュメントを格納
- **CompanyInfo/** - 会社情報関連
  - `株式会社藤崎_サービス詳細.md` - サービス詳細情報
- **SiteAnalysis/** - サイト分析関連
  - `藤崎ECサイト_現状分析メモ.md` - 現状分析結果
- **ImprovementProposals/** - 改善提案関連
- `プロジェクト概要.md` - プロジェクト全体概要
- `ミーティング記録.md` - 各種ミーティング記録
- `File Structure.md` - ファイル構成説明

### 📁 TaskManagement/
タスクの管理と進捗追跡
- `課題管理表.md` - 課題の一覧と管理
- `進捗管理.md` - プロジェクト進捗状況
- `サイト全体の回遊性を高め、ユーザーが目的とする商品に辿り着きやすい状態を作る_整理版.md` - 主要タスクの詳細

### 📁 Data/
分析データやリサーチ結果を格納

### 📁 Output/
プロジェクトの成果物やアウトプットを格納

### 📁 Website/
Webサイト関連のファイルやデータを格納

## MCP との連携

### Browser Automation with Puppeteer MCP
`@modelcontextprotocol/server-puppeteer`の統合により、ClaudeはECサイトページの分析が可能：
- ECサイトページへのナビゲーション
- フルページまたは要素レベルのスクリーンショット取得
- JSを実行して構造化データを抽出（ナビゲーションメニュー、商品リスト、ページメタデータ）
- 自然言語プロンプトによるアクション連携

## Browser Automation with Puppeteer MCP
By integrating `@modelcontextprotocol/server-puppeteer`, Claude can:
- Navigate to EC site pages
- Capture full-page or element-level screenshots
- Execute JS to extract structured data (navigation menus, product lists, page metadata)
- Chain actions via natural language prompts

これにより、LLM駆動のブラウザ制御を使用したWebページの視覚的・構造的分析が可能になります。

**関連ツール:**
- `puppeteer_navigate`
- `puppeteer_screenshot`